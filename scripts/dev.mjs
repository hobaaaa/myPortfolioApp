import { existsSync, mkdirSync, readFileSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";
import net from "node:net";

const rootDir = process.cwd();
const nextDir = join(rootDir, ".next");
const stateDir = join(rootDir, ".codex");
const pidFile = join(stateDir, "dev-server.pid");
const devPort = Number.parseInt(process.env.PORT ?? "3000", 10);

function isProcessAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readRunningPid() {
  if (!existsSync(pidFile)) {
    return null;
  }

  const raw = readFileSync(pidFile, "utf8").trim();
  const pid = Number.parseInt(raw, 10);

  if (!Number.isInteger(pid) || pid <= 0) {
    unlinkSync(pidFile);
    return null;
  }

  if (!isProcessAlive(pid)) {
    unlinkSync(pidFile);
    return null;
  }

  return pid;
}

function ensureCleanStart() {
  mkdirSync(stateDir, { recursive: true });

  const runningPid = readRunningPid();
  if (runningPid) {
    console.error(
      `Bu proje icin zaten calisan bir dev server bulundu (PID ${runningPid}). Once onu kapatin, sonra tekrar deneyin.`
    );
    process.exit(1);
  }

  if (existsSync(nextDir)) {
    rmSync(nextDir, { recursive: true, force: true });
  }
}

function ensurePortAvailable(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once("error", (error) => {
      if (error.code === "EADDRINUSE") {
        reject(
          new Error(
            `Port ${port} zaten kullanimda. Acik bir dev server veya baska bir uygulama varken yeni baslangic yapilamaz.`
          )
        );
        return;
      }

      reject(error);
    });

    server.once("listening", () => {
      server.close(() => resolve());
    });

    server.listen(port);
  });
}

function resolveNextBin() {
  return join(rootDir, "node_modules", "next", "dist", "bin", "next");
}

async function main() {
  await ensurePortAvailable(devPort);
  ensureCleanStart();

  const nextBin = resolveNextBin();
  const child = spawn(process.execPath, [nextBin, "dev"], {
    cwd: rootDir,
    stdio: "inherit",
    env: process.env
  });

  writeFileSync(pidFile, String(child.pid));

  const cleanup = () => {
    if (existsSync(pidFile)) {
      try {
        unlinkSync(pidFile);
      } catch {
        // Ignore cleanup races on shutdown.
      }
    }
  };

  process.on("SIGINT", () => {
    child.kill("SIGINT");
  });

  process.on("SIGTERM", () => {
    child.kill("SIGTERM");
  });

  child.on("exit", (code, signal) => {
    cleanup();

    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });

  child.on("error", (error) => {
    cleanup();
    console.error(error);
    process.exit(1);
  });
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

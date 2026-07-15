import Link from "next/link";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.5 11.8c0 4.7-3.9 8.6-8.7 8.6-1.5 0-3-.4-4.2-1.1L3 20.7l1.5-4.4A8.48 8.48 0 0 1 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.5 3.8 8.5 8.5zm-8.5-7c-3.9 0-7.1 3.2-7.1 7.1 0 1.3.4 2.6 1 3.7l.2.3-.9 2.5 2.6-.8.3.2c1.1.6 2.3.9 3.5.9 3.9 0 7.1-3.2 7.1-7.1S15.9 4.8 12 4.8zm3.9 9.2c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.6.1-1.6-.8-2.6-1.5-3.6-3.4-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.3.2-.4.1-.1 0-.3 0-.4 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 4 3.4.6.3 1.1.4 1.5.6.6.2 1.1.2 1.6.1.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.2-1 0-.2-.2-.2-.4-.3z" />
    </svg>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 left-5 z-40">
      <Link
        href="https://wa.me/905536662353"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0a1626]/88 px-4 py-3 text-sm font-semibold text-white shadow-panel backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-[#27d366]/35 hover:bg-[#0d2036]"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#27d366] text-white">
          <WhatsAppIcon />
        </span>
        <span className="hidden sm:inline">WhatsApp</span>
      </Link>
    </div>
  );
}

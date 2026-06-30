import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  const width = compact ? 120 : 180;
  const height = compact ? 84 : 126;

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo_dark_seffaf.png"
        alt="DG Digital logo"
        width={width}
        height={height}
        priority={compact}
      />
    </Link>
  );
}

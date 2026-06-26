import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  const width = compact ? 120 : 184;
  const height = compact ? 50 : 78;

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-dg.svg"
        alt="DG Digital logo"
        width={width}
        height={height}
        priority={compact}
      />
    </Link>
  );
}

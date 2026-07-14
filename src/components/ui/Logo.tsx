import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="Nexora RealtyOS home"
    >
      <Image
        src="/nexora-realtyos-logo.svg"
        alt="Nexora RealtyOS"
        width={390}
        height={80}
        priority
        className={cn("h-auto w-[172px]", compact && "w-[148px]")}
      />
    </Link>
  );
}

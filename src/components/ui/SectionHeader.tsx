import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className={cn(
        "mb-9 md:mb-12",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="headline-lg text-on-surface text-balance">{title}</h2>
      {subtitle && (
        <p className="body-md mt-4 text-on-surface-variant text-pretty">{subtitle}</p>
      )}
    </div>
  );
}

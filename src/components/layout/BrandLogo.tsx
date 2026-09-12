import Image from "next/image";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Larger mark for footer / hero contexts */
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { wrap: "h-14", img: "h-12", width: 200, height: 60 },
  md: { wrap: "h-16 sm:h-20", img: "h-14 sm:h-[4.5rem]", width: 300, height: 90 },
  lg: { wrap: "h-20 sm:h-24", img: "h-16 sm:h-20", width: 340, height: 102 },
} as const;

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  const s = sizes[size];

  return (
    <span className={cn("inline-flex items-center justify-center", s.wrap, className)}>
      <Image
        src="/invoice_logo.png"
        alt={SITE.name}
        width={s.width}
        height={s.height}
        priority={size !== "lg"}
        className={cn("w-auto object-contain", s.img)}
      />
    </span>
  );
}

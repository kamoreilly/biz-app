import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-2xl", centered && "text-center", className)}>
      <h2 
        className={cn(
          "text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p 
          className={cn(
            "mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
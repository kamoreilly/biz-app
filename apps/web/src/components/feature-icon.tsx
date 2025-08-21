import { cn } from "@/lib/utils";
import { OptimizedIcon } from "./optimized-icon";

interface FeatureIconProps {
  children: React.ReactNode;
  className?: string;
  color?: "blue" | "green" | "purple" | "orange" | "indigo" | "teal";
}

const colorMap = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
  indigo: "bg-indigo-600",
  teal: "bg-teal-600",
};

export function FeatureIcon({ children, className, color = "blue" }: FeatureIconProps) {
  return (
    <div
      className={cn(
        "h-12 w-12 flex items-center justify-center rounded-lg mb-4",
        colorMap[color],
        className
      )}
      aria-hidden="true"
    >
      <OptimizedIcon
        icon={children}
        className="h-6 w-6 text-white"
        loading="lazy"
      />
    </div>
  );
}
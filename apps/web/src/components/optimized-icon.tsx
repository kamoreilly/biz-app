"use client";

import { memo, lazy, Suspense } from "react";
import { LoadingSkeleton } from "./loading-skeleton";

interface OptimizedIconProps {
  icon: React.ReactNode;
  className?: string;
  "aria-hidden"?: boolean;
  loading?: "eager" | "lazy";
}

const LazyIcon = memo(function LazyIcon({ 
  icon, 
  className,
  "aria-hidden": ariaHidden = true 
}: Omit<OptimizedIconProps, "loading">) {
  return (
    <svg 
      className={className}
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor"
      aria-hidden={ariaHidden}
    >
      {icon}
    </svg>
  );
});

export function OptimizedIcon({ 
  icon, 
  className = "h-6 w-6", 
  loading = "lazy",
  ...props 
}: OptimizedIconProps) {
  if (loading === "eager") {
    return <LazyIcon icon={icon} className={className} {...props} />;
  }

  return (
    <Suspense 
      fallback={
        <LoadingSkeleton 
          className={className}
          variant="rectangle"
        />
      }
    >
      <LazyIcon icon={icon} className={className} {...props} />
    </Suspense>
  );
}
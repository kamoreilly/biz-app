import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
  variant?: "card" | "text" | "circle" | "rectangle";
}

export function LoadingSkeleton({ 
  className, 
  variant = "rectangle" 
}: LoadingSkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700";
  
  const variantClasses = {
    card: "h-48 rounded-lg",
    text: "h-4 rounded",
    circle: "h-12 w-12 rounded-full",
    rectangle: "h-6 rounded",
  };

  return (
    <div 
      className={cn(baseClasses, variantClasses[variant], className)}
      role="presentation"
      aria-label="Loading content"
    />
  );
}

export function FeatureCardSkeleton() {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <LoadingSkeleton variant="circle" />
      <LoadingSkeleton className="h-6 w-3/4" variant="text" />
      <LoadingSkeleton className="h-4 w-full" variant="text" />
      <LoadingSkeleton className="h-4 w-5/6" variant="text" />
      <div className="space-y-2">
        <LoadingSkeleton className="h-3 w-4/5" variant="text" />
        <LoadingSkeleton className="h-3 w-3/4" variant="text" />
        <LoadingSkeleton className="h-3 w-2/3" variant="text" />
      </div>
    </div>
  );
}

export function TestimonialCardSkeleton() {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <LoadingSkeleton key={i} className="h-4 w-4" variant="rectangle" />
        ))}
      </div>
      <div className="space-y-2">
        <LoadingSkeleton className="h-4 w-full" variant="text" />
        <LoadingSkeleton className="h-4 w-5/6" variant="text" />
        <LoadingSkeleton className="h-4 w-4/5" variant="text" />
      </div>
      <div className="flex items-center space-x-3">
        <LoadingSkeleton variant="circle" />
        <div className="space-y-1">
          <LoadingSkeleton className="h-4 w-24" variant="text" />
          <LoadingSkeleton className="h-3 w-32" variant="text" />
        </div>
      </div>
    </div>
  );
}
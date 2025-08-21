"use client";

import { Suspense, lazy } from "react";
import { FeatureCardSkeleton, TestimonialCardSkeleton } from "./loading-skeleton";

interface SectionSuspenseProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  type?: "features" | "testimonials" | "default";
}

const defaultFallbacks = {
  features: (
    <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
      <FeatureCardSkeleton />
      <FeatureCardSkeleton />
      <FeatureCardSkeleton />
    </div>
  ),
  testimonials: (
    <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
      <TestimonialCardSkeleton />
      <TestimonialCardSkeleton />
      <TestimonialCardSkeleton />
    </div>
  ),
  default: (
    <div className="animate-pulse">
      <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  ),
};

export function SectionSuspense({ 
  children, 
  fallback, 
  type = "default" 
}: SectionSuspenseProps) {
  return (
    <Suspense fallback={fallback || defaultFallbacks[type]}>
      {children}
    </Suspense>
  );
}
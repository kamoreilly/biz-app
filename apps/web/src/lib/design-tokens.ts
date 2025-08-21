// Design Tokens and Constants for Biz-App

export const spacing = {
  section: {
    sm: "py-16",
    md: "sm:py-24", 
    lg: "lg:py-32",
    full: "py-16 sm:py-24 lg:py-32"
  },
  container: {
    padding: "px-4 sm:px-6 lg:px-8",
    maxWidth: "mx-auto max-w-7xl"
  },
  grid: {
    gap: {
      sm: "gap-4",
      md: "gap-6 sm:gap-8", 
      lg: "gap-8 lg:gap-12"
    }
  }
} as const;

export const colors = {
  primary: "blue",
  success: "green", 
  warning: "orange",
  danger: "red",
  info: "purple"
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px", 
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
} as const;

export const grid = {
  features: "grid max-w-xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-3",
  testimonials: "grid max-w-xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-3",
  metrics: "grid max-w-xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:max-w-none lg:grid-cols-4",
  valueProps: "grid max-w-xl grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3"
} as const;

export const button = {
  responsive: "w-full sm:w-auto",
  focus: "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
} as const;
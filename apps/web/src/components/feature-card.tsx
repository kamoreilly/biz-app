import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureIcon } from "./feature-icon";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  iconColor?: "blue" | "green" | "purple" | "orange" | "indigo" | "teal";
  className?: string;
}

export function FeatureCard({
  title,
  description,
  features,
  icon,
  iconColor = "blue",
  className,
}: FeatureCardProps) {
  return (
    <Card 
      role="listitem" 
      className={cn(
        "focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
        className
      )} 
      tabIndex={0}
    >
      <CardHeader>
        <FeatureIcon color={iconColor}>
          {icon}
        </FeatureIcon>
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
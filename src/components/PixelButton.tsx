
import React from "react";
import { cn } from "@/lib/utils";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "destructive";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const PixelButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: PixelButtonProps) => {
  const variantStyles = {
    primary: "bg-pixel-mint dark:bg-pixel-navy",
    secondary: "bg-pixel-pastelBlue dark:bg-pixel-pastelBlue/30",
    accent: "bg-pixel-sand dark:bg-pixel-terracotta/70",
    destructive: "bg-pixel-pastelPink dark:bg-pixel-pastelPink/70",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={cn(
        "pixel-btn",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PixelButton;

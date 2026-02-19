import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
}: ButtonProps) {
  const base =
    "rounded-lg font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-primary-600 text-foreground-50 hover:bg-primary-300",
    secondary:
      "border border-primary-600 text-primary-600 hover:bg-primary-100",
    ghost:
      "text-foreground-300 hover:text-foreground-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      disabled={disabled}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

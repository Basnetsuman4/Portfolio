import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const variantStyles: Record<string, string> = {
  default: "bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--bg)]",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-[var(--border)] bg-transparent hover:bg-[var(--bg-3)] hover:text-[var(--fg)]",
  secondary: "bg-[var(--bg-2)] text-[var(--fg)] hover:bg-[var(--bg-3)]",
  ghost: "hover:bg-[var(--bg-3)] hover:text-[var(--fg)]",
  link: "text-[var(--accent)] underline-offset-4 hover:underline",
};

const sizeStyles: Record<string, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3 text-xs",
  lg: "h-11 rounded-md px-8 text-base",
  icon: "h-10 w-10 p-0 flex items-center justify-center",
};

export const buttonVariants = ({
  variant = "default",
  size = "default",
  className = "",
}: {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  className?: string;
} = {}) => {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
    variantStyles[variant] || variantStyles.default,
    sizeStyles[size] || sizeStyles.default,
    className
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

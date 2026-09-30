declare module "@radix-ui/react-slot" {
  import * as React from "react";
  export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
  }
  export const Slot: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;
}

declare module "@radix-ui/react-label" {
  import * as React from "react";
  export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
  export const Root: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
}

declare module "class-variance-authority" {
  export type VariantProps<T extends (...args: any) => any> = Parameters<T>[0];
  export function cva<T>(
    base?: string | string[],
    config?: {
      variants?: Record<string, Record<string, string>>;
      compoundVariants?: Array<Record<string, any>>;
      defaultVariants?: Record<string, string>;
    }
  ): (props?: Record<string, any>) => string;
}

declare module "lucide-react" {
  import * as React from "react";
  export type LucideIcon = React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }
  >;
  export const Link2: LucideIcon;
  export const Camera: LucideIcon;
  export const Briefcase: LucideIcon;
  export const MessageCircle: LucideIcon;
}

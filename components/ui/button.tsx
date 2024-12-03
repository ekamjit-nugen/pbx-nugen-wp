// "use client";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-tr from-foreground to-foreground/70 text-background  shadow-lg shadow-primary border-2 hover:scale-110",
        destructive: "bg-destructive text-destructive-foreground shadow-sm",
        outline:
          "border border-foreground bg-transparent shadow-sm text-foreground hover:text-background ",
        ghost:
          "bg-transparent hover:shadow-xl text-background ",
        link: "text-background underline-offset-2 hover:underline hover:text-primary !p-0 w-fit",
      },
      size: {
        default: "h-9 px-8 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
     asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props },ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <div className="relative overflow-hidden z-20 flex justify-center gap-1 items-center tracking-wider">
          {props.children}
        </div>
        <div className="scale-x-0 h-full w-full absolute left-0 top-0 bg-primary z-0 rounded-full transition-all duration-500 delay-50 ease-in-out origin-left group-hover:origin-center group-hover:scale-x-90" />
        <div className="scale-x-0 h-full w-full absolute top-0 bg-foreground z-0 rounded-full transition-all duration-500 delay-100 ease-in-out origin-left group-hover:scale-x-110" />
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

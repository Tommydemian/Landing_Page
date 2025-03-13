import { cn } from "@/lib/utils/cn";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

type Variant = "outline" | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: Variant;
}

export const Button: FC<ButtonProps> = ({ children, variant, className, ...props }) => {
    const isOutline = variant === "outline";
    return (
        <button
            className={cn(
                "button-base rounded-lg",
                isOutline
                    ? "cursor-pointer border border-tag-box-border bg-secondary-composition text-white hover:border-white hover:text-white-smoke"
                    : "bg-accent text-body-inverse hover:bg-soft-accent hover:shadow-accent/20 hover:shadow-lg",
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

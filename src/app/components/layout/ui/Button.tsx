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
                isOutline ? "cursor-pointer bg-secondary-composition text-white" : "bg-accent text-body-inverse",
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

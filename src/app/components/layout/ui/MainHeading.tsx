import { cn } from "@/lib/utils/cn";
import type { FC, ReactNode } from "react";

type MainHeadingProps = {
    children: ReactNode;
    className?: string;
};

export const MainHeading: FC<MainHeadingProps> = ({ children, className }) => {
    return (
        <h2
            style={{ color: "#fff" }}
            className={cn("text-center font-semibold text-heading text-heading-primary", className)}
        >
            {children}
        </h2>
    );
};

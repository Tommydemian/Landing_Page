import { cn } from "@/lib/utils/cn";
import type { FC, ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
    return <div className={cn("mx-auto max-w-[1200px]", className)}>{children}</div>;
};

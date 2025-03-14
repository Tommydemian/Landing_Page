import { cn } from "@/lib/utils/cn";
import type { FC, ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
    return <div className={cn("mx-auto box-content max-w-[1200px] px-4", className)}>{children}</div>;
};

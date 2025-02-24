import type { FC, ReactNode } from "react";

type DisplayTextProps = {
    children: ReactNode;
};

export const DisplayText: FC<DisplayTextProps> = ({ children }) => {
    return (
        <h1 className="tetx-pretty mx-auto max-w-[20ch] text-center font-semibold text-display text-heading">
            {children}
        </h1>
    );
};

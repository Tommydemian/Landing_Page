import type { FC, ReactNode } from "react";

type DisplayTextProps = {
    children: ReactNode;
};

export const DisplayText: FC<DisplayTextProps> = ({ children }) => {
    return <h1 className="max-w-[40ch] font-semibold text-display text-heading">{children}</h1>;
};

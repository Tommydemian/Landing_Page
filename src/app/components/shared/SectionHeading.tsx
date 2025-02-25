import { MainHeading } from "../layout/ui/MainHeading";
import { cn } from "@/lib/utils/cn";
import type { FC } from "react";

type SectionHeadingProps = {
    headingText: string;
    subheadingText: string;
    n: number;
};

export const SectionHeading: FC<SectionHeadingProps> = ({ headingText, n, subheadingText }) => {
    return (
        <div
            className={cn(
                "services-heading__wrapper relative flex w-full flex-col items-center justify-center py-[3.125em]",
                `service-heading__wrapper-${n}`,
            )}
        >
            <div className="relative z-10">
                <MainHeading>{headingText}</MainHeading>
                <p className="fluid-body-fs max-w-[none] text-center text-body-clr">{subheadingText}</p>
            </div>
        </div>
    );
};

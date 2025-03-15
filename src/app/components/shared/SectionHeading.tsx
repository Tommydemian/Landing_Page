import { MainHeading } from "../layout/ui/MainHeading";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "../layout/ui/Link";
import type { JSX } from "react";

interface Props {
    headingText: string;
    subheadingText?: string;
    n: number;
    logo?: string | JSX.Element;
    buttonText?: string;
    buttonLink?: string;
}

export const SectionHeading = ({ headingText, n, subheadingText, logo, buttonLink, buttonText }: Props) => {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col items-center justify-center pb-10",
                `service-heading__wrapper-${n}`,
            )}
        >
            {typeof logo === "string" ? (
                <div>{logo && <Image src={logo} width={50} height={50} alt="Contact Us" />}</div>
            ) : (
                <div>{logo}</div>
            )}

            <div className="relative z-10 space-y-4">
                <MainHeading>{headingText}</MainHeading>
                <p className="fluid-subtitle-fs max-w-[none] text-center text-body-clr">{subheadingText}</p>
            </div>
            <div>{buttonLink && <Link linkUrl={buttonLink}>{buttonText}</Link>}</div>
        </div>
    );
};

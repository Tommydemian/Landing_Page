import Link from "next/link";
import type { Service } from "@/types/service";
import type { FC } from "react";

type ServiceCardCtaProps = {
    cta: Service["cta"];
};

export const ServiceCardCta: FC<ServiceCardCtaProps> = ({ cta }) => {
    return (
        <Link
            className="flex origin-bottom-left items-center justify-center rounded-sm bg-tertiary py-[14px] font-medium text-body capitalize transition-colors duration-500 ease-in-out hover:bg-[#3D3D3D] active:bg-[#333333] md:mt-12 md:self-end"
            href="#"
        >
            {cta}
        </Link>
    );
};

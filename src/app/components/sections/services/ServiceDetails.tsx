"use client";
import { cn } from "@/lib/utils/cn";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import type { FC } from "react";

type ServiceDetailsProps = {
    id: number;
    title: string;
    subtitle: string;
    handleActiveService: (id: number) => void;
};

export const ServiceDetails: FC<ServiceDetailsProps> = ({ subtitle, title, id, handleActiveService }) => {
    const detailsRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(detailsRef, { margin: detailsRef.current != null ? "-45% 0px -45% 0px" : "0px" });

    useEffect(() => {
        if (isInView) {
            handleActiveService(id);
        }
    }, [isInView]);

    return (
        <div
            className={cn(
                "service-details-transition",
                // isInView ? "text-[#00f566] drop-shadow-[0_0_5px_rgba(0,245,102,0.5)]" : "text-[#333333] opacity-50",
                isInView ? "text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]" : "text-[#333333] opacity-50",
            )}
            ref={detailsRef}
        >
            <p className="self-start font-semibold text-display">{title}</p>
            <p className="fluid-subtitle-fs self-start">{subtitle}</p>
        </div>
    );
};

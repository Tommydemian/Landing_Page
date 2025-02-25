"use client";

import { ServiceCardCta } from "./ServiceCardCta";
import { ServiceCardHeading } from "./ServiceCardHeading";
import { motion } from "motion/react";
import type { FC } from "react";
import type { Service } from "@/types/service";

type ServiceCardProps = {
    card: Service;
    i: number;
};

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 50,
        scale: 0.9,
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: 0.15 * i,
            duration: 0.5,
        },
    }),
};

export const ServiceCard: FC<ServiceCardProps> = ({ card, i }) => {
    return (
        <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={i}
            viewport={{ once: true }}
            className="h-full border border-b-base"
        >
            {
                <motion.div
                    variants={fadeInAnimationVariants}
                    className="grid gap-y-6 p-30 md:h-full md:grid-rows-[auto_1fr_auto] md:gap-y-4"
                >
                    <ServiceCardHeading icon={card.icon} title={card.title} />
                    <p className="fluid-body-fs text-body-clr">{card.body}</p>
                    <ServiceCardCta cta={card.cta} />
                </motion.div>
            }
        </motion.li>
    );
};

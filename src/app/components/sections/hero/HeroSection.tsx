"use client";
import { Button } from "../../layout/ui/Button";
import { Container } from "../../layout/ui/Container";
import { useFilterAnimation } from "@/app/hooks/useFilterAnimation";
import { motion } from "motion/react";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import type { CSSProperties } from "react";

const parentVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const textFadingVariant = {
    hidden: {
        opacity: 0,
        y: "100%",
        filter: "blur(25px)",
        display: "inline-block",
    },
    visible: {
        opacity: 1,
        y: "0%",
        filter: "blur(0px)",
        display: "inline-block",
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

export const HeroSection = () => {
    const { filterDeg, scope } = useFilterAnimation({});

    const isMobile = useIsMobile();

    const displayText = isMobile
        ? "Artful Engineering, Scientific Results"
        : "The Art of Digital Engineering, The Science of Business Success";

    return (
        <motion.section
            ref={scope}
            id="hero-section"
            className="relative min-h-screen"
            style={{ "--filter-val": filterDeg } as CSSProperties}
        >
            <Container className="flex h-full flex-col justify-center px-4 pt-10 pb-16 md:pt-24">
                <div className="space-y-8 md:space-y-10">
                    <motion.h1
                        variants={parentVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="max-w-[40ch] text-center font-semibold text-display text-heading leading-[1.15] md:text-left"
                    >
                        {displayText.split(" ").map((word, i) => (
                            <motion.span className="mr-[0.6rem]" variants={textFadingVariant} key={`${word}-${i}`}>
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <motion.p
                        variants={parentVariant}
                        className="max-w-[60ch] text-[1.5rem] text-subtitle leading-tight"
                    >
                        Blending 8+ years of technical expertise with strategic insight to transform business challenges
                        into digital opportunities
                    </motion.p>
                    {/* <HeroTagline /> */}
                    <div className="relative z-20 flex items-center justify-start gap-x-3">
                        <Button variant="outline">Our Works</Button>
                        <Button variant="accent">Contact Us</Button>
                    </div>
                </div>
            </Container>
        </motion.section>
    );
};

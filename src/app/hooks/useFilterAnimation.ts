import { useMotionValue, useTransform, useAnimate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

type FilterAnimationConfig = {
    initialValue?: number;
    maxValue?: number;
    animationDuration?: number;
    pauseDuration?: number;
    cycles?: number;
};

export function useFilterAnimation({
    initialValue = 90,
    maxValue = 180,
    animationDuration = 3,
    pauseDuration = 5000,
    cycles = 10,
}: FilterAnimationConfig) {
    const mounted = useRef(true);
    const filterVal = useMotionValue(initialValue);
    const filterDeg = useTransform(filterVal, (value) => `${value}deg`);
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    const handleAnimate = async () => {
        if (!mounted.current) return;

        for (let i = 0; i < cycles; i++) {
            if (!mounted.current) break;

            await animate(filterVal, maxValue, {
                duration: animationDuration,
                ease: "easeInOut",
            });
            await new Promise((resolve) => setTimeout(resolve, pauseDuration));

            if (!mounted.current) break;

            await animate(filterVal, initialValue, {
                duration: animationDuration,
                ease: "easeInOut",
            });
            await new Promise((resolve) => setTimeout(resolve, pauseDuration));
        }
    };

    useEffect(() => {
        mounted.current = true;
        if (isInView) {
            handleAnimate();
        }
        return () => {
            mounted.current = false;
        };
    }, [isInView]);

    return {
        scope,
        filterDeg,
        isInView,
    };
}

"use client";
import { useCustomCursor } from "@/app/hooks/useCustomCursor";

export const CustomCursor = () => {
    const { cursorDotRef, cursorRingRef } = useCustomCursor();
    return (
        <>
            <div ref={cursorDotRef} className="cursor-dot" />
            <div ref={cursorRingRef} className="cursor-ring" />
        </>
    );
};

"use client";
import { useCustomCursor } from "@/app/hooks/useCustomCursor";

export const CustomCursor = () => {
    const { cursorRef } = useCustomCursor();
    return <div ref={cursorRef} className="cursor-dot" />;
};

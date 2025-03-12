"use client";
import { useEffect, useRef } from "react";

export function useCustomCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        }

        function handleMouseDown() {
            if (cursorRef.current) {
                cursorRef.current.classList.add("active");
            }
        }

        function handleMouseUp() {
            if (cursorRef.current) {
                cursorRef.current.classList.remove("active");
            }
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return { cursorRef };
}

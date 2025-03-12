import { useEffect, useRef } from "react";

export function useCustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement | null>(null);
    const cursorRingRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${e.clientX}px`;
                cursorDotRef.current.style.top = `${e.clientY}px`;
            }

            if (cursorRingRef.current) {
                cursorRingRef.current.animate([{ left: `${e.clientX}px`, top: `${e.clientY}px` }], {
                    duration: 250,
                    fill: "forwards",
                    easing: "ease",
                });
            }
        }

        function handleMouseDown() {
            if (cursorDotRef.current) {
                cursorDotRef.current.classList.add("active");
            }
            if (cursorRingRef.current) {
                cursorRingRef.current.classList.add("active");
            }
        }

        function handleMouseUp() {
            if (cursorDotRef.current) {
                cursorDotRef.current.classList.remove("active");
            }
            if (cursorRingRef.current) {
                cursorRingRef.current.classList.remove("active");
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

    return { cursorDotRef, cursorRingRef };
}

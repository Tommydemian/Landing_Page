import { HeroSection } from "./HeroSection";
import type { FC } from "react";

export const HeroWrapper: FC = () => {
    return (
        <div className="relative">
            {/* Gradiente de fondo */}
            <div className="gradient-overlay" />
            {/* Fondo con desenfoque */}
            <div
                className="absolute inset-0 bg-repeat opacity-70"
                style={{
                    backgroundImage: `url("https://img.freepik.com/free-vector/grey-hexagons-black-background_78370-2098.jpg")`,
                    filter: "blur(0.07rem)",
                }}
            />

            {/* Contenido sin desenfoque */}
            <div className="relative z-10">
                <HeroSection />
            </div>
        </div>
    );
};

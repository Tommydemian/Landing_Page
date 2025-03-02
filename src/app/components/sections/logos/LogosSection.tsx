import type { CSSProperties } from "react";
import {
    ReactLogo,
    AstroLogo,
    TailwindLogo,
    VueLogo,
    NextjsLogo,
    RemixLogo,
    JSLogo,
    SvelteLogo,
    TSLogo,
} from "./svgs/Logos";

export const LogosSection = () => {
    return (
        <div className="marquee fadeout-horizontal my-4" style={{ "--numItems": 9 } as CSSProperties}>
            <div className="marquee-track">
                <div className="marquee-item" style={{ "--item-position": 1 } as CSSProperties}>
                    <ReactLogo />
                </div>
                <div className="marquee-item" style={{ "--item-position": 2 } as CSSProperties}>
                    <AstroLogo />
                </div>
                <div className="marquee-item" style={{ "--item-position": 3 } as CSSProperties}>
                    <TailwindLogo />
                </div>
                <div className="marquee-item" style={{ "--item-position": 4 } as CSSProperties}>
                    <VueLogo />
                </div>
                <div className="marquee-item" style={{ "--item-position": 5 } as CSSProperties}>
                    <NextjsLogo />
                </div>
                <div className="marquee-item" style={{ "--item-position": 6 } as CSSProperties}>
                    <RemixLogo />
                </div>
                <div className="marquee-item" style={{ "--item-position": 7 } as CSSProperties}>
                    <JSLogo />
                </div>
                <div className="marquee-item" style={{ "--item-position": 8 } as CSSProperties}>
                    <TSLogo />
                </div>
                <div className="marquee-item" style={{ "--item-position": 9 } as CSSProperties}>
                    <SvelteLogo />
                </div>
            </div>
        </div>
    );
};

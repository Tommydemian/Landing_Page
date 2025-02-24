import { DisplayText } from "../../layout/ui/DisplayText";
import { HeroTagline } from "./HeroTagline";
import { Button } from "../../layout/ui/Button";

export const HeroSection = () => {
    return (
        <div id="hero-section" className="h-[566px] w-full space-y-8 pt-section xl:h-[691px]">
            <DisplayText>A Digital Product Studio that will Work</DisplayText>
            <HeroTagline />
            <div className="flex items-center justify-center gap-x-3">
                <Button variant="outline" type="button">
                    Our Works
                </Button>
                <Button variant="accent" type="button">
                    Contact Us
                </Button>
            </div>
        </div>
    );
};

import { DisplayText } from "../../layout/ui/DisplayText";
import { HeroTagline } from "./HeroTagline";
import { Button } from "../../layout/ui/Button";
export const HeroSection = () => {
    return (
        <section id="hero-section" className="relative min-h-screen w-full space-y-12 px-4 pt-section md:px-0">
            <DisplayText>A Digital Product Studio that will Work</DisplayText>
            <HeroTagline />
            <div className="flex items-center justify-center gap-x-3">
                <Button variant="outline">Our Works</Button>
                <Button variant="accent">Contact Us</Button>
            </div>
        </section>
    );
};

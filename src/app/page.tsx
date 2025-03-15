import { HeroWrapper } from "./components/sections/hero/HeroWrapper";
import { ServicesSection } from "./components/sections/services/ServicesSection";
import { MasonryGrid } from "./components/layout/ui/Grid";
import { ContactUsSection } from "./components/sections/contact-us/ContactUsSection";
import { CustomCursor } from "./components/layout/CustomCursor";

export default function HomePage() {
    return (
        <main className="pt-header-height">
            <CustomCursor />
            <HeroWrapper />
            {/* <LogosSection /> */}
            <ServicesSection />
            <MasonryGrid />
            {/* <Carousel /> */}
            <ContactUsSection />
        </main>
    );
}

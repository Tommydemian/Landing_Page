import { HeroSection } from "./components/sections/hero/HeroSection";
import { ServicesSection } from "./components/sections/services/ServicesSection";
import { LogosSection } from "./components/sections/logos/LogosSection";
import { MasonryGrid } from "./components/layout/ui/Grid";
import { ContactUsSection } from "./components/sections/contact-us/ContactUsSection";

export default function HomePage() {
    return (
        <main className="pt-header-height">
            <div className="hero-section-wrapper">
                <HeroSection />
            </div>
            <LogosSection />
            <ServicesSection />
            <MasonryGrid />
            <ContactUsSection />
        </main>
    );
}

import { HeroSection } from "./components/sections/hero/HeroSection";
import { ServicesSection } from "./components/sections/services/ServicesSection";

export default function HomePage() {
    return (
        <main className="pt-header-height">
            <div className="hero-section-wrapper">
                <HeroSection />
            </div>
            <ServicesSection />
        </main>
    );
}

import { Container } from "./components/layout/ui/Container";
import { HeroSection } from "./components/sections/hero/HeroSection";

export default function HomePage() {
    return (
        <main className="pt-header-height">
            <Container>
                <HeroSection />
            </Container>
            <section className="min-h-screen">d</section>
        </main>
    );
}

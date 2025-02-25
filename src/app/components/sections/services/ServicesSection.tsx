import { Container } from "../../layout/ui/Container";
import { SectionHeading } from "../../shared/SectionHeading";
import { ServicesList } from "./ServicesList";

export const ServicesSection = () => {
    return (
        <section>
            <Container className="my-section">
                <SectionHeading
                    headingText="Our Services"
                    n={1}
                    subheadingText="Transform your brand with our innovative digital solutions that captivate and engage your audience."
                />
                <ServicesList />
            </Container>
        </section>
    );
};

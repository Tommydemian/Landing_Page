import { Container } from "../../layout/ui/Container";
import { MainHeading } from "../../layout/ui/MainHeading";
import { ServicesList } from "./ServicesList";

export const ServicesSection = () => {
    return (
        <section>
            <Container className="my-section">
                <div className="services-heading__wrapper relative flex w-full flex-col items-center justify-center py-[3.125em]">
                    <div className="relative z-10">
                        <MainHeading>Our Services</MainHeading>
                        <p className="fluid-body-fs max-w-[none] text-center text-body-clr">
                            Transform your brand with our innovative digital solutions that captivate and engage your
                            audience.
                        </p>
                    </div>
                </div>
                <ServicesList />
            </Container>
        </section>
    );
};

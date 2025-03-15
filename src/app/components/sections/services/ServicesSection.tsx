"use client";
import { servicesList } from "@/data/servicesList";
import { Container } from "../../layout/ui/Container";
import { SectionHeading } from "../../shared/SectionHeading";
import { ServiceDetails } from "./ServiceDetails";
import { ServiceCardV2 } from "./ServiceCardV2";
import { useCallback, useEffect, useState } from "react";

export const ServicesSection = () => {
    const [activeServiceId, setActiveServiceId] = useState(0);

    const handleActiveService = useCallback((id: number) => {
        setActiveServiceId(id);
    }, []);

    useEffect(() => {
        console.log(activeServiceId);
    }, [activeServiceId]);

    return (
        <section>
            <Container className="my-section">
                <SectionHeading
                    headingText="Our Services"
                    n={1}
                    // subheadingText="Transform your brand with our innovative digital solutions that captivate and engage your audience."
                />
                <div className="relative mx-auto grid min-h-[200vh] max-w-5xl grid-cols-[1fr] md:grid-cols-[1fr_1fr]">
                    <ul className="flex w-full flex-col justify-between py-[15vh]">
                        {servicesList.map((s) => (
                            <li className="py-16" key={s.id}>
                                {/* <p className="self-start font-semibold text-display">{s.title}</p>
                                <p className="fluid-subtitle-fs self-start">{s.subtitle}</p> */}
                                <ServiceDetails
                                    handleActiveService={handleActiveService}
                                    id={s.id}
                                    title={s.title}
                                    subtitle={s.subtitle}
                                />
                            </li>
                        ))}
                    </ul>

                    <ServiceCardV2 activeServiceId={activeServiceId} />

                    {/* <div className="sticky top-1/4 aspect-square h-fit w-full max-w-[30rem] justify-self-end rounded-2xl bg-gray-100">
                        check
                    </div> */}
                </div>
                {/* <ServicesList /> */}
            </Container>
        </section>
    );
};

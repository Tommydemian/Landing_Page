//components
import { ServiceCardCta } from "./ServiceCardCta";
import { ServiceCardHeading } from "./ServiceCardHeading";
import type { FC } from "react";
import type { Service } from "@/types/service";

type ServiceCardProps = {
    card: Service;
};

export const ServiceCard: FC<ServiceCardProps> = ({ card }) => {
    return (
        <li className="h-full border border-b-base" key={card.id}>
            {
                <div className="grid gap-y-6 p-30 md:h-full md:grid-rows-[auto_1fr_auto] md:gap-y-4">
                    <ServiceCardHeading icon={card.icon} title={card.title} />
                    <p className="fluid-body-fs text-body-clr">{card.body}</p>
                    <ServiceCardCta cta={card.cta} />
                </div>
            }
        </li>
    );
};

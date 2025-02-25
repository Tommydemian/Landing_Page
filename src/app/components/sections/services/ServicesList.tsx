import { servicesList } from "@/data/servicesList";
import { ServiceCard } from "./ServiceCard";

export const ServicesList = () => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-3">
            {servicesList.map((el) => (
                <ServiceCard key={el.id} card={el} />
            ))}
        </ul>
    );
};

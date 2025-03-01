import { servicesList } from "@/data/servicesList";
import { ServiceCard } from "./ServiceCard";

export const ServicesList = () => {
    return (
        // <ul className="grid grid-cols-1 md:grid-cols-3 with-subgrid">
        <ul className="with-subgrid">
            {servicesList.map((el, i) => (
                <ServiceCard key={el.id} card={el} i={i} />
            ))}
        </ul>
    );
};

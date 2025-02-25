import type { Service } from "@/types/service";
import type { FC } from "react";

type ServiceCardHeadingProps = {
    icon: Service["icon"];
    title: Service["title"];
};

export const ServiceCardHeading: FC<ServiceCardHeadingProps> = ({ icon, title }) => {
    return (
        <div className="flex items-center gap-x-3 md:flex-col md:items-start md:gap-y-6">
            <div
                data-card-icon-wrapper
                className="card-icon-border flex items-center justify-center rounded-sm bg-list-icon p-4"
            >
                {icon}
            </div>

            <h3 className="fluid-card-heading-fs font-semibold text-heading">{title}</h3>
        </div>
    );
};

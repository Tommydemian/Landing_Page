import { cn } from "@/lib/utils/cn";
import { servicesList } from "@/data/servicesList";
import { useEffect, type FC } from "react";

type ServiceCardV2Props = {
    activeServiceId: number;
};

export const ServiceCardV2: FC<ServiceCardV2Props> = ({ activeServiceId }) => {
    const activeService = servicesList.find((s) => activeServiceId === s.id);
    useEffect(() => {
        console.log(activeService, "Active service");
    }, [activeService]);
    return (
        <div
            className={cn(
                "sticky top-1/4 aspect-square h-fit w-full max-w-[30rem] justify-self-end overflow-clip rounded-2x rounded-2xl",
            )}
            style={{
                backgroundImage: activeService?.gradient
                    ? `linear-gradient(to bottom right, #262626, ${
                          activeServiceId === 1
                              ? "#312e81"
                              : activeServiceId === 2
                                ? "#065f46"
                                : activeServiceId === 3
                                  ? "#164e63"
                                  : activeServiceId === 4
                                    ? "#78350f"
                                    : "#701a75"
                      })`
                    : "",
            }}
        >
            <div className="relative flex h-full w-full flex-col items-center justify-center">
                {servicesList.map((service) => (
                    <div
                        key={service.id}
                        className="absolute inset-0 p-8 transition-opacity duration-500"
                        style={{
                            opacity: activeServiceId === service.id ? 1 : 0,
                            filter: activeServiceId === service.id ? "blur(0)" : "blur(2px)",
                            transform: activeServiceId === service.id ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.5s ease, filter 0.6s ease, transform 0.5s ease",
                            pointerEvents: activeServiceId === service.id ? "auto" : "none",
                        }}
                    >
                        <div className="relative h-full w-full">{service.svg}</div>
                        {/* Más contenido aquí */}
                    </div>
                ))}
                {/* <DesignSvg  /> */}
            </div>
        </div>
    );
};

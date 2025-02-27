import Image from "next/image";
import { portfolioProjects } from "@/data/projects";

export const MasonryGrid = () => {
    return (
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr_1fr]">
            {portfolioProjects.map((p) => (
                <li className="overflow-clip rounded-sm bg-tertiary" key={p.id}>
                    <figure>
                        <Image src={p.imageUrl} alt={p.title} width={2000} height={2000} />
                    </figure>
                    <figcaption className="fluid-body-fs text-body">
                        <p>{p.description}</p>
                        <div className="flex gap-x-2">
                            {p.technologies.map((p) => (
                                <p className="font-bold italic" key={p}>
                                    {p}
                                </p>
                            ))}
                        </div>
                    </figcaption>
                </li>
            ))}
        </ul>
    );
};

// Size variation (large, medium, small) that you can use for different grid areas or spans
// Featured flag for highlighting certain items
// Color values from your existing color palette
// Technologies array that can be used for tags/pills within each grid item

import Image from "next/image";
import { Container } from "../layout/ui/Container";
import { portfolioProjects } from "@/data/projects";

export const MasonryGrid = () => {
    return (
        <Container className="px-4">
            <div className="masonry-grid">
                {portfolioProjects.map((p) => (
                    <figure key={p.id} className="items-center gap-x-2 overflow-clip rounded-sm bg-tertiary">
                        <Image src={p.imageUrl} alt={p.title} width={2000} height={2000} />
                        <figcaption className="fluid-body-fs text-body">
                            <p>{p.description}</p>
                            <div className="flex gap-x-2">
                                {p.technologies.map((tech) => (
                                    <p className="font-bold italic" key={tech}>
                                        {tech}
                                    </p>
                                ))}
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </Container>
    );
};

// Size variation (large, medium, small) that you can use for different grid areas or spans
// Featured flag for highlighting certain items
// Color values from your existing color palette
// Technologies array that can be used for tags/pills within each grid item

import Image from "next/image";
import { Container } from "./Container";
import { portfolioProjects } from "@/data/projects";
import { cn } from "@/lib/utils/cn";

export const MasonryGrid = () => {
    function getColSpan(i: number) {
        if (i === 1) return "col-span-1";
        if (i === 2) return "col-span-1";
        if (i === 5) return "col-span-1";
        return "col-span-2";
    }
    return (
        <section>
            <Container className="max-xl:px-4">
                <div className="masonry-grid overflow-clip">
                    {portfolioProjects.map((p, i) => {
                        return (
                            <figure
                                key={p.id}
                                className={cn(
                                    "h-full items-center gap-x-2 overflow-clip rounded-sm bg-tertiary max-md:col-auto",
                                    getColSpan(i),
                                )}
                            >
                                {/* <div className="max-h-[50%] w-full overflow-clip"> */}
                                <Image
                                    src={p.imageUrl}
                                    alt={p.title}
                                    width={2000}
                                    height={2000}
                                    className="object-contain"
                                />
                                {/* </div> */}
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
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

import { BrushSvg } from "@/app/components/sections/services/svgs/Brush";
import { EnergySvg } from "@/app/components/sections/services/svgs/Energy";
import { PuzzlePieceSvg } from "@/app/components/sections/services/svgs/PuzzlePiece";
import type { Service } from "@/types/service";

export const servicesList: Service[] = [
    {
        id: 1,
        icon: <BrushSvg />,
        title: "Design",
        body: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        cta: "Learn more",
    },
    {
        id: 2,
        icon: <PuzzlePieceSvg />,
        title: "Engineering",
        body: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        cta: "Learn more",
    },
    {
        id: 3,
        icon: <EnergySvg />,
        title: "Project Management",
        body: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        cta: "Learn more",
    },
];

import { BrushSvg } from "@/app/components/sections/services/svgs/Brush";
import { MeetingSvg } from "@/app/components/sections/services/svgs/MeetingSvg";
import { DesignSvg } from "@/app/components/sections/services/svgs/DesignSvg";
import { EnergySvg } from "@/app/components/sections/services/svgs/Energy";
import { EngineerSvg } from "@/app/components/sections/services/svgs/EngineerSvg";
import { PuzzlePieceSvg } from "@/app/components/sections/services/svgs/PuzzlePiece";
import type { Service } from "@/types/service";
import { QASvg } from "@/app/components/sections/services/svgs/QaSvg";
export const servicesList: Service[] = [
    {
        id: 1,
        icon: <BrushSvg />,
        title: "Discovery and Strategy",
        subtitle: "We sit with you to understand your vision and business goals",
        body: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        cta: "Learn more",
        gradient: "bg-gradient-to-br from-neutral-800 to-indigo-900",
        svg: <MeetingSvg className="absolute inset-0 h-full w-full" />,
    },
    {
        id: 2,
        icon: <BrushSvg />,
        title: "Design",
        subtitle: "We listen to your vision and transform it into stunning visuals",
        body: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        cta: "Learn more",
        gradient: "bg-gradient-to-br from-neutral-800 to-emerald-800",
        svg: <DesignSvg className="absolute inset-0 h-full w-full" />,
    },
    {
        id: 3,
        icon: <PuzzlePieceSvg />,
        title: "Engineering",
        subtitle: "We build robust solutions with cutting-edge technologies",
        body: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        cta: "Learn more",
        gradient: "bg-gradient-to-br from-neutral-800 to-cyan-900",
        svg: <EngineerSvg className="absolute inset-0 h-full w-full" />,
    },
    {
        id: 4,
        icon: <PuzzlePieceSvg />,
        title: "Quality Assurance",
        subtitle: "Rigorous testing across devices and platforms",
        body: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        cta: "Learn more",
        gradient: "bg-gradient-to-br from-neutral-800 to-amber-900",
        svg: <QASvg className="absolute inset-0 h-full w-full" />,
    },
    {
        id: 5,
        icon: <EnergySvg />,
        title: "Project Management",
        subtitle: "We ensure your project stays on track from concept to launch",
        body: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        cta: "Learn more",
        gradient: "bg-gradient-to-br from-neutral-800 to-fuchsia-900",
        svg: <MeetingSvg className="absolute inset-0 h-full w-full" />,
    },
];

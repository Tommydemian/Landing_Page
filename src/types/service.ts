import type { JSX } from "react";

export type Service = {
    id: number;
    icon: JSX.Element;
    title: string;
    subtitle: string;
    body: string;
    cta: string;
    gradient: string;
    svg: JSX.Element;
};

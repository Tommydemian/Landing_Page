import type { JSX } from "react";

export type Service = {
    id: number;
    icon: JSX.Element;
    title: string;
    body: string;
    cta: string;
};

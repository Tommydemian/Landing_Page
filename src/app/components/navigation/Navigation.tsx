import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { FC } from "react";

export const Navigation: FC = () => {
    return (
        <nav className="nav w-full">
            <ul className={cn("nav__list gap-x-8 text-nav-link")}>
                {navLinks.map((el) => (
                    <Link
                        className="flex h-[2rem] items-center justify-center rounded-lg px-[0.75rem] text-[#ADADAE] transition-colors hover:bg-[#5a575744] hover:text-white-smoke"
                        href="#"
                        key={el}
                    >
                        {el}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

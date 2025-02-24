"use client";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { Navigation } from "../../navigation/Navigation";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-10 w-full border-tag-box-border border-b px-4 backdrop-blur-md">
            <Container className="header-container flex h-header items-center justify-between">
                <Logo />
                {/* Navigation */}
                <Navigation />
                {/* CTA */}
                <Button variant="accent" className="ml-auto hidden text-nowrap md:flex">
                    Contact Us
                </Button>

                <button
                    type="button"
                    aria-label="toggle mobile navigation menu"
                    className="relative block cursor-pointer md:hidden"
                >
                    {/* Hidden input toggles mobile navigation menu */}
                    <input type="checkbox" hidden id="menu-toggle" className="header-checkbox" />
                    <label
                        htmlFor="menu-toggle"
                        className="header-checkbox__label grid cursor-pointer grid-cols-1 grid-rows-1"
                    >
                        <X size={20} color="#d8ff99" className="x col-start-1 row-start-1 opacity-10" />
                        <Menu size={20} color="#d8ff99" className="menu col-start-1 row-start-1" />
                    </label>
                </button>
            </Container>
        </header>
    );
};

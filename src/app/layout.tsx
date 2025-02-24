import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Header } from "./components/layout/header/Header";
import "./globals.css";

const barlow = Barlow({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-barlow",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${barlow.variable} antialiased`}>
                <Header />
                {children}
            </body>
        </html>
    );
}

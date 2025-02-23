import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: ["400", "500", "600"]
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
      <body
        className={`${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter, Raleway } from "next/font/google";
// import "../styles/globals.css";
// import { Footer } from "@/components/layout/footer/Footer";
// import { HeaderNavClientWrapper } from "@/components/layout/HeaderNavClientWrapper";

// const inter = Inter({
//     subsets: ["latin"],
//     display: "swap",
//     variable: "--font-inter",
// });

// const raleway = Raleway({
//     subsets: ["latin"],
//     display: "swap",
//     variable: "--font-raleway",
// });

// export const metadata: Metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
//             <body>
//                 <HeaderNavClientWrapper />
//                 {children}
//                 <Footer />
//             </body>
//         </html>
//     );
// }


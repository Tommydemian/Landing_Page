import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "e7.pngegg.com",
            },
        ],
    },
};
export default nextConfig;

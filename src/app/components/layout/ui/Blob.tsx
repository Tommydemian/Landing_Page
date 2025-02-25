import type { FC } from "react";

type BlobProps = {
    className?: string;
};
export const Blob: FC<BlobProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="sw-js-blob-svg"
        version="1.1"
        viewBox="0 0 100 100"
        className={className}
    >
        <title>blob svg</title>
        <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" offset="0%" stopColor="#9EFF00" />
                <stop id="stop2" offset="100%" stopColor="#9EFF00" />
            </linearGradient>
        </defs>
        <path
            fill="url(#sw-gradient)"
            strokeWidth="0"
            d="M24-29.6C30.9-22.7 36.3-15 38.4-6.3c2.1 8.8 1 18.6-4.2 24.6-5.3 6-14.5 8.1-23.3 11.1-8.8 2.9-17.1 6.6-25.7 5.8s-17.5-6.1-20.8-13.7c-3.2-7.7-.9-17.6 1.4-27 2.4-9.3 4.7-18.1 10.4-25.2S-9.1-43.1-.3-42.8 17-36.5 24-29.6"
            style={{ transition: ".3s" }}
            transform="translate(50 50)"
        />
    </svg>
);

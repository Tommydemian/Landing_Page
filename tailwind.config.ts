import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            display: ["var(--fs-display-text)", { lineHeight: "var(--lh-display)" }],
            body: ["var(--fs-body-text)", { lineHeight: "var(--lh-body)" }],
            button: ["var(--fs-button-text)", { lineHeight: "1.2" }],
            "nav-link": ["var(fs-nav-link-text)", { lineHeight: "1.5" }],
        },
        extend: {
            colors: {
                heading: "var(--clr-heading)",
                tag: "var(--clr-tag)",
                "tag-box-border": "var(--clr-neutral-600)",

                "body-inverse": "var(--clr-neutral-600)",
                "body-clr": "var(--clr-body)",
                "white-smoke": "var(--clr-neutral-150)",
            },
            backgroundColor: {
                primary: "var(--clr-background-primary)",
                secondary: "var(--clr-background-secondary)",
                accent: "var(--clr-primary-400)",
            },
            borderRadius: {
                sm: "var(--br-sm)",
                md: "var(--br-md)",
            },
            backdropBlur: {
                "tag-box": "12px", // just the numeric value
            },
            height: {
                header: "var(--header-height)",
            },
            padding: {
                "header-height": "var(--header-height)",
            },
            spacing: {
                "header-height": "var(--header-height)",
                section: "5rem",
            },
        },
    },
    plugins: [],
} satisfies Config;

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

            "subtitle-sm": ["var(--fs-subtitle-sm)", { lineHeight: "var(--lh-display)" }],
            "subtitle-md": ["var(--fs-subtitle-md)", { lineHeight: "var(--lh-display)" }],
            "subtitle-lg": ["var(--fs-subtitle-lg)", { lineHeight: "var(--lh-display)" }],

            body: ["var(--fs-body-text)", { lineHeight: "var(--lh-body)" }],
            button: ["var(--fs-button-text)", { lineHeight: "1.2" }],
            "nav-link": ["var(--fs-nav-link-text)", { lineHeight: "1.5" }],
            "heading-primary": ["var(--fs-heading-primary-text)", { lineHeight: "var(--lh-heading)" }],

            "card-heading-sm": ["var(--fs-card-heading-sm)", { lineHeight: "var(--lh-heading)" }],
            "card-heading-md": ["var(--fs-card-heading-md)", { lineHeight: "var(--lh-heading)" }],
            "card-heading-lg": ["var(--fs-card-heading-lg)", { lineHeight: "var(--lh-heading)" }],

            "body-sm": ["var(--fs-body-sm)", { lineHeight: "var(--lh-body)" }],
            "body-md": ["var(--fs-body-md)", { lineHeight: "var(--lh-body)" }],
            "body-lg": ["var(--fs-body-lg)", { lineHeight: "var(--lh-body)" }],
        },
        extend: {
            colors: {
                heading: "var(--clr-heading)",
                subtitle: "#ffffffb3",
                tag: "var(--clr-tag)",
                "tag-box-border": "rgba(255, 255, 255, 0.3)",

                "body-inverse": "var(--clr-neutral-600)",
                "body-clr": "var(--clr-body)",
                "white-smoke": "var(--clr-neutral-150)",
                "b-base": "var(--clr-border-base)",
            },
            backgroundColor: {
                primary: "var(--clr-background-primary)",
                secondary: "var(--clr-background-secondary)",
                tertiary: "var(--clr-background-tertiary)",
                accent: "var(--clr-primary-400)",
                "soft-accent": "var(--clr-primary-300)",
            },
            backgroundImage: {
                "list-icon": "linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%)",
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
                30: "var(--size-30)",
            },
        },
    },
    plugins: [],
} satisfies Config;

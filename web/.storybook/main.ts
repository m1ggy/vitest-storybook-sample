import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
        "@storybook/addon-coverage",
        "@storybook/addon-essentials",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;

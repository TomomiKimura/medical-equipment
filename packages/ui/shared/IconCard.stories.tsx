import { IconCard } from "./IconCard";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    component: IconCard,
} as ComponentMeta<typeof IconCard>;

export const WithDescriptionLight: ComponentStoryObj<typeof IconCard> = {
    args: {
        theme: "light",
        title: "DISCOVER",
        description:
            "Visit the learning center to access buyer’s guides, project checklists, and pricing guides.",
    },
};
export const WithDescriptionDark: ComponentStoryObj<typeof IconCard> = {
    args: {
        theme: "dark",
        title: "PROJECT COORDINATION FROM START TO FINISH",
        description:
            "A dedicated project manager is here to serve from inspection to de-installation, crating, rigging, transport, importation support, and installation.",
    },
};

export const WithoutDescriptionLight: ComponentStoryObj<typeof IconCard> = {
    args: {
        theme: "light",
        title: "DISCOVER",
    },
};
export const WithoutDescriptionDark: ComponentStoryObj<typeof IconCard> = {
    args: {
        theme: "dark",
        title: "PROJECT COORDINATION FROM START TO FINISH",
    },
};

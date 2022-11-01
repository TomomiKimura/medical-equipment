import { IconCard } from "./IconCard";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    component: IconCard,
} as ComponentMeta<typeof IconCard>;

export const WithDescriptionPrimary: ComponentStoryObj<typeof IconCard> = {
    args: {
        title: "DISCOVER",
        description:
            "Visit the learning center to access buyer’s guides, project checklists, and pricing guides.",
    },
};

//FIXME: Can I use different module.css from the primary? e.x. Different background and font color
export const WithDescriptionSecondary: ComponentStoryObj<typeof IconCard> = {
    args: {
        title: "PROJECT COORDINATION FROM START TO FINISH",
        description:
            "A dedicated project manager is here to serve from inspection to de-installation, crating, rigging, transport, importation support, and installation.",
    },
};

export const WithoutDescriptionPrimary: ComponentStoryObj<typeof IconCard> = {
    args: {
        title: "DISCOVER",
    },
};
export const WithoutDescriptionSecondary: ComponentStoryObj<typeof IconCard> = {
    args: {
        title: "PROJECT COORDINATION FROM START TO FINISH",
    },
};

import { IconCard } from "./IconCard";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
  component: IconCard,
} as ComponentMeta<typeof IconCard>;

export const ImageWithDescription: ComponentStoryObj<typeof IconCard> = {
  args: {
    theme: "light",
    image: {
      alt: "Discovery logo",
      src: "https://via.placeholder.com/50x50/FFFFFF",
    },
    title: "DISCOVER",
    description: "Visit the learning center to access buyer’s guides, project checklists, and pricing guides.",
  },
};
export const LargeImageWithDescriptionDark: ComponentStoryObj<typeof IconCard> = {
  args: {
    theme: "dark",
    image: {
      alt: "Discovery logo",
      src: "https://via.placeholder.com/800x800/000000",
    },
    title: "PROJECT COORDINATION FROM START TO FINISH",
    description:
      "A dedicated project manager is here to serve from inspection to de-installation, crating, rigging, transport, importation support, and installation.",
  },
};

export const LongImageWithoutDescriptionLight: ComponentStoryObj<typeof IconCard> = {
  args: {
    theme: "light",
    image: {
      alt: "Discovery logo",
      src: "https://via.placeholder.com/100x40/FFFFFF",
    },
    title: "DISCOVER",
  },
};
export const TallImageWithoutDescriptionDark: ComponentStoryObj<typeof IconCard> = {
  args: {
    theme: "dark",
    image: {
      alt: "Discovery logo",
      src: "https://via.placeholder.com/40x80/000000",
    },
    title: "PROJECT COORDINATION FROM START TO FINISH",
  },
};
export const IconWithDescription: ComponentStoryObj<typeof IconCard> = {
  args: {
    theme: "light",
    image: "house",
    title: "PROJECT COORDINATION FROM START TO FINISH",
  },
};

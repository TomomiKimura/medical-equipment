import { IconTile } from "./IconTile";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import "./../global-imports";

export default {
  component: IconTile,
} as ComponentMeta<typeof IconTile>;

export const WithImage: ComponentStoryObj<typeof IconTile> = {
  args: {
    image: {
      src: "https://via.placeholder.com/125x125/0000FF",
      alt: "Logo of the equipment",
    },
  },
};

export const WithImageAndTitle: ComponentStoryObj<typeof IconTile> = {
  args: {
    title: "equipment",
    image: {
      src: "https://via.placeholder.com/125x125/0000FF",
      alt: "Logo of the equipment",
    },
  },
};

export const WithImageAndTitleAndDescription: ComponentStoryObj<typeof IconTile> = {
  args: {
    title: "equipment",
    description: "Browse 200+ Systems in Stock",
    image: {
      src: "https://via.placeholder.com/125x125/0000FF",
      alt: "Logo of the equipment",
    },
  },
};

export const WithLargeImage: ComponentStoryObj<typeof IconTile> = {
  args: {
    title: "equipment",
    description: "Browse 200+ Systems in Stock",
    image: {
      src: "https://via.placeholder.com/800x800/0000FF",
      alt: "Logo of the equipment",
    },
  },
};
export const WithLongImage: ComponentStoryObj<typeof IconTile> = {
  args: {
    title: "equipment",
    description: "Browse 200+ Systems in Stock",
    image: {
      src: "https://via.placeholder.com/400x100/0000FF",
      alt: "Logo of the equipment",
    },
  },
};
export const WithTallImage: ComponentStoryObj<typeof IconTile> = {
  args: {
    title: "equipment",
    description: "Browse 200+ Systems in Stock",
    image: {
      src: "https://via.placeholder.com/100x400/0000FF",
      alt: "Logo of the equipment",
    },
  },
};

export const WithIcon: ComponentStoryObj<typeof IconTile> = {
  args: {
    image: "briefcase",
  },
};

export const WithIconAndTitle: ComponentStoryObj<typeof IconTile> = {
  args: {
    image: "briefcase",
    title: "Equipment",
  },
};

export const WithIconAndDescription: ComponentStoryObj<typeof IconTile> = {
  args: {
    image: "briefcase",
    description: "Browse 200+ Systems in Stock",
  },
};

export const WithIconAndTitleAndDescription: ComponentStoryObj<typeof IconTile> = {
  args: {
    image: "briefcase",
    title: "Equipment",
    description: "Browse 200+ Systems in Stock",
  },
};

// TODO: Create a component instead and add logos (together)
export const TileGrid: ComponentStoryObj<typeof IconTile> = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            // Make components wrap to additional rows if needed
            flexWrap: "wrap",
            // Prevent elements from going past the l breakpoint
            maxWidth: "1280px",
            justifyContent: "center",
          }}
        >
          <IconTile
            title="equipment"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="mobile"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="parts"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="service"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="equipment"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="mobile"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="parts"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="service"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
        </div>
      </div>
    );
  },
};

export const TileGridMobile: ComponentStoryObj<typeof IconTile> = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            // Make components wrap to additional rows if needed
            flexWrap: "wrap",
            // Prevent elements from going past the l breakpoint
            maxWidth: "1280px",
            justifyContent: "center",
          }}
        >
          <IconTile
            title="equipment"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="mobile"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="parts"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="service"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="equipment"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="mobile"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="parts"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
          <IconTile
            title="service"
            image={{
              src: "https://via.placeholder.com/125x125/0000FF",
              alt: "Icon",
            }}
          />
        </div>
      </div>
    );
  },
};

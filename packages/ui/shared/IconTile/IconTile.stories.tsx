import { IconTile } from "./IconTile";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
  component: IconTile,
} as ComponentMeta<typeof IconTile>;

export const WithDescription: ComponentStoryObj<typeof IconTile> = {
  args: {
    title: "equipment",
    description: "Browse 200+ Systems in Stock",
    image: {
      src: "https://via.placeholder.com/125x125/0000FF",
      alt: "Logo of the equipment",
    },
  },
};

export const WithoutDescription: ComponentStoryObj<typeof IconTile> = {
  args: {
    title: "equipment",
    image: {
      src: "https://via.placeholder.com/125x125/0000FF",
      alt: "Logo of the equipment",
    },
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

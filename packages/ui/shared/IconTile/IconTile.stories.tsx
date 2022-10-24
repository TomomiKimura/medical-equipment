import { IconTile } from "./IconTile";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    component: IconTile,
} as ComponentMeta<typeof IconTile>;

export const WithDescription: ComponentStoryObj<typeof IconTile> = {
    args: {
        title: "equipment",
        description: "Browse 200+ Systems in Stock",
    },
};

export const WithoutDescription: ComponentStoryObj<typeof IconTile> = {
    args: {
        title: "equipment",
    },
};

// TODO: Create a component instead
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
                    <IconTile title="equipment" />
                    <IconTile title="mobile" />
                    <IconTile title="parts" />
                    <IconTile title="service" />
                    <IconTile title="equipment" />
                    <IconTile title="mobile" />
                    <IconTile title="parts" />
                    <IconTile title="service" />
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
                    <IconTile title="equipment" />
                    <IconTile title="mobile" />
                    <IconTile title="parts" />
                    <IconTile title="service" />
                    <IconTile title="equipment" />
                    <IconTile title="mobile" />
                    <IconTile title="parts" />
                    <IconTile title="service" />
                </div>
            </div>
        );
    },
};

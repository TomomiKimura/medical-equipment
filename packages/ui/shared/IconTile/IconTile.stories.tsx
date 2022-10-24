import { IconTile } from "./IconTile";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    component: IconTile,
} as ComponentMeta<typeof IconTile>;

export const Primary: ComponentStoryObj<typeof IconTile> = {
    args: {
        children: "IconTile",
        type: "primary",
    },
};

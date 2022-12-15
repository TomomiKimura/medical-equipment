import { Icon } from "./Icon";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import "./global-imports";

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const icon: ComponentStoryObj<typeof Icon> = {
  args: {
    icon: "chevron-double-left",
  },
};

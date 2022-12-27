import { Icon } from "./Icon";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const icon: ComponentStoryObj<typeof Icon> = {
  args: {
    name: "chevron-double-left",
  },
};

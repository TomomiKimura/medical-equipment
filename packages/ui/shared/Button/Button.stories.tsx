// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
import { Button } from "./Button";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Click me!",
    type: "primary",
  },
};

export const Secondary: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "secondary",
  },
};
export const Subtle: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "subtle",
  },
};
export const Destructive: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
  },
};

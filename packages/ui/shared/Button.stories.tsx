// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
import { Button } from "./Button";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import "./global-imports";

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
export const Destructive: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
  },
};

export const WithIcon1: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
    icon: "emoji-smile",
  },
};

export const WithIcon2: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
    icon: "emoji-frown",
  },
};

export const WithoutIcon: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
    icon: undefined,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
import { Button } from "./Button";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import "./../global-imports";

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

export const WithIcon1: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
    iconRight: "emoji-smile",
  },
};

export const WithIcon2: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
    iconRight: "emoji-frown",
  },
};

export const NoIcon: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
  },
};

export const iconOnTheLeft: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
    iconLeft: "chevron-double-left",
  },
};

export const iconOnTheRight: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
    iconRight: "chevron-double-right",
  },
};

export const iconOnTheBoth: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Hello!",
    type: "destructive",
    iconLeft: "chevron-double-left",
    iconRight: "chevron-double-right",
  },
};

export const onlyIcon: ComponentStoryObj<typeof Button> = {
  args: {
    type: "destructive",
    iconLeft: "chevron-double-left",
  },
};

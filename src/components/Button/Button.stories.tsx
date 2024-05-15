import { Button } from "./Button";
import { StoryObj } from "@storybook/react";
import { ButtonProps } from "./Button";
import { IconButton, IconButtonProps } from "./IconButton";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/dytYKVyXYobjZXq0BDPFsK/e2n-admin.18.04.23?node-id=303%3A51441&t=tOdmpeO4QYOISGNJ-1",
    },
  },
};

export const Default: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>Default</Button>,
  args: {
    variant: "default",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>Secondary</Button>,
  args: {
    variant: "secondary",
  },
};

export const Destructive: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>Destructive</Button>,
  args: {
    variant: "destructive",
  },
};

export const Outline: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>Outline</Button>,
  args: {
    variant: "outline",
  },
};

export const Ghost: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>Ghost</Button>,
  args: {
    variant: "ghost",
  },
};

export const Link: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>Link</Button>,
  args: {
    variant: "link",
  },
};

export const Large: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>Large button</Button>,
  args: {
    variant: "default",
    size: "lg",
  },
};

export const Small: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>Small button</Button>,
  args: {
    variant: "default",
    size: "sm",
  },
};

export const Icon: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps) => <IconButton {...args} />,
  args: {
    icon: faCogs,
  },
};

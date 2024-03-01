// import { userEvent, within } from '@storybook/testing-library';
import { Button } from "./Button";
import { StoryObj } from "@storybook/react";
// import { expect } from '@storybook/jest';
import { ButtonProps } from "./types";

export default {
  title: "Components/Buttons",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/dytYKVyXYobjZXq0BDPFsK/e2n-admin.18.04.23?node-id=303%3A51441&t=tOdmpeO4QYOISGNJ-1",
    },
  },
};

export const Basic: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => (
    <Button type="button" {...args}>
      Click me
    </Button>
  ),
  args: {
    variant: "primary",
  },
};

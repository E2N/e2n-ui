import { StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { SwitchProps } from "./types";
import { userEvent, within } from "@storybook/test";
import { expect } from "@storybook/test";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/dytYKVyXYobjZXq0BDPFsK/e2n-Web.16.05.23?type=design&node-id=1054%3A90286&t=vpySEPHRmHsccoM2-1",
    },
  },
};

export const Default: StoryObj<SwitchProps> = {
  render: (args) => <Switch {...args} />,
  args: {
    variant: "default",
    disabled: false,
    size: "medium",
    onCheckedChange: () => console.log("changed"),
    label: "My Switch",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step("Toggle between states", async () => {
      const switchComponent = canvas.getByTestId("switch");

      await expect(switchComponent.getAttribute("data-state")).toBe(
        "unchecked",
      );
      await userEvent.click(switchComponent);
      await expect(switchComponent.getAttribute("data-state")).toBe("checked");
      await userEvent.click(switchComponent);
      await expect(switchComponent.getAttribute("data-state")).toBe(
        "unchecked",
      );
    });
  },
};

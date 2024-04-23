import { StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
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

export const Default: StoryObj<typeof Switch> = {
  render: (args) => <Switch />,
  // args: {
  //   disabled: false,
  //   onCheckedChange: () => console.log("changed"),
  // },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step("Toggle between states", async () => {
      const switchComponent = canvas.getByTestId("switch");

      await expect(switchComponent.getAttribute("data-state")).toBe(
        "unchecked"
      );
      await userEvent.click(switchComponent);
      await expect(switchComponent.getAttribute("data-state")).toBe("checked");
      await userEvent.click(switchComponent);
      await expect(switchComponent.getAttribute("data-state")).toBe(
        "unchecked"
      );
    });
  },
};

import { userEvent, within } from "@storybook/test";
import { Button } from "./Button";
import { StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { ButtonProps } from "./Button";

export default {
  title: "Components/Buttons/Button",
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
    variant: "secondary",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("button-container");

    await step("Button container", async () => {
      /** Check the text content of the button. */
      expect(button.textContent).toBe("Click me");
      /**  Check that the button element is in the document. */
      expect(button).toBeInTheDocument();

      /**  Check that the button element contains a "button" tag. */
      expect(button).toContainHTML("button");

      /**  Check that the button element has the expected CSS class. */
      expect(button).toHaveClass("e2n-button");

      /**  Check that the button element has a "className" property. */
      expect(button).toHaveProperty("className");

      /**  Check that the button element has a "type" attribute. */
      expect(button).toHaveAttribute("type");

      /**  Simulate a hover event on the button element. */
      userEvent.hover(
        await within(canvasElement).getByTestId("button-container")
      );
      /**  Simulate a click event on the button element. */
      await userEvent.click(button);
    });
  },
};

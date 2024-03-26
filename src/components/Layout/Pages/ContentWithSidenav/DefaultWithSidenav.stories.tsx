import { Meta, StoryObj } from "@storybook/react";
import { ContentWithSidenav } from "./ContentWithSidenav";
import { ContentWithHeader } from "../ContentWithHeader";

const meta: Meta<typeof ContentWithSidenav> = {
  title: "Layout/Pages/ContentWithSidenav",
  component: ContentWithSidenav,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    Sidenav: {
      control: false,
    },
    Main: {
      control: false,
    },
  },
};
export default meta;

/**
 * Simple page with header and content.
 */
export const Default: StoryObj<typeof ContentWithSidenav> = {
  render: (args) => {
    return (
      <ContentWithHeader
        Header={<div>Header</div>}
        Main={<ContentWithSidenav Sidenav={args.Sidenav} Main={args.Main} />}
      />
    );
  },
  args: {
    Sidenav: <div>Sidenav</div>,
    Main: <div>Main</div>,
  },
};

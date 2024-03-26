import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Badge, BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/dytYKVyXYobjZXq0BDPFsK/e2n-admin.18.04.23?node-id=99%3A10844&t=tOdmpeO4QYOISGNJ-1",
    },
  },
};

export const Default = {
  render: (args: BadgeProps) => <Badge {...args} />,
  args: {
    text: "Nicht zugewiesen",
    variant: "success",
  },
};

export const WithIcon = {
  render: (args: BadgeProps) => <Badge {...args} />,
  args: {
    text: "Download",
    icon: faDownload,
  },
};

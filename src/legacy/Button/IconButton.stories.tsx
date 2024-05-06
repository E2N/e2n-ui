import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { IconButton, IconButtonProps } from "./IconButton";

export default {
  title: "Legacy/Buttons/IconButton",
  component: IconButton,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/dytYKVyXYobjZXq0BDPFsK/e2n-admin.18.04.23?node-id=43%3A11480&t=tOdmpeO4QYOISGNJ-1",
    },
  },
};

export const Basic = {
  render: (args: IconButtonProps) => <IconButton {...args} />,
  args: {
    icon: faEdit,
  },
};

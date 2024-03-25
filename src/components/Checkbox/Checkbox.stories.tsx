import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  paramters: {
    controls: {
      exclude: ["className", "defaultChecked"],
    },
  },
};

export const Default = {
  render: () => <Checkbox />,
  args: {},
};

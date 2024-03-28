import { Callout, CalloutProps } from "./Callout";

export default {
  title: "Components/Callout",
  component: Callout,
};

export const Default = {
  render: (args: CalloutProps) => <Callout {...args} />,
  args: {
    variant: "error",
    message: "Diese Aktion konnte nicht ausgeführt werden.",
  },
};

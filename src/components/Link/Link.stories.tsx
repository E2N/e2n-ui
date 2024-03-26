import { Link, LinkProps } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
};

export const Default = {
  render: (args: LinkProps) => <Link {...args}>Eine andere Seite</Link>,
};

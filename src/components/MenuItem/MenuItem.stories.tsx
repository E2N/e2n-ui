import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "./MenuItem";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
};

export const Default = {
  render: () => <MenuItem label="Verträge" />,
};

export const WithIcon = {
  render: () => <MenuItem icon={faPeopleRoof} label="Kunden" />,
};

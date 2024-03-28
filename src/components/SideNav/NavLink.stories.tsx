import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "./NavItem";
import { LinkSideNavItem } from "./SideNav";

export default {
  title: "Layout/SideNav/NavItem",
  component: NavLink,
};

const item: LinkSideNavItem = {
  name: "Verträge",
  icon: faFileContract,
  href: "example.com",
};

export const Default = {
  render: () => {
    return (
      <div style={{ width: 200 }}>
        <NavLink item={item} />
      </div>
    );
  },
};

import { Avatar } from "../Avatar";
import { Navigation } from "./Navigation";
import { NavigationProps } from "./types";
import imgSrc from "../../assets/images/defaultAvatar.png";
import {
  NavigationButton,
  NavigationDropdownButton,
  HomeItemContainer,
} from "./components";
import { NavigationSettings } from "./components/Settings";
import { Button } from "../Button";
import { within, userEvent } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { lightTheme } from "../../theme";

export default {
  title: "Components/Navigation",
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    label: {
      control: false,
    },
    menuItems: {
      control: false,
    },
    renderProfile: {
      control: false,
    },
    renderSettings: {
      control: false,
    },
    renderHome: {
      control: false,
    },
    theme: {
      control: false,
    },
  },
};

const PrimaryItems = [
  <NavigationDropdownButton trigger="Item 1" key="abc">
    <div>Subitem 1</div>
    <div>Subitem 2</div>
  </NavigationDropdownButton>,
  <NavigationButton key="xyz">Item 2</NavigationButton>,
  <NavigationButton key="item3" component="a">
    Item 3
  </NavigationButton>,
  <NavigationDropdownButton key="assda" trigger="Item 4">
    <div>Subitem 1</div>
    <div>Subitem 2</div>
    <div>Subitem 3</div>
  </NavigationDropdownButton>,
];

export const Default: StoryObj<NavigationProps> = {
  render: (args: NavigationProps) => <Navigation {...args} />,
  args: {
    label: "navigation",
    menuItems: PrimaryItems,
    renderProfile: () => <Avatar imgSrc={imgSrc} />,
    renderSettings: () => (
      <NavigationSettings>
        <div>
          Darkmode
          <Button onClick={() => alert("hello")}>Toggle</Button>
        </div>
      </NavigationSettings>
    ),
    renderHome: () => (
      <HomeItemContainer href="https://e2n.de" title="My Café" />
    ),
    theme: lightTheme,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Home container", async () => {
      const homeContainerElement = canvas.getByTestId(
        "navigation-home-container",
      );
      await expect(homeContainerElement.textContent).toBe("My Café");
    });

    await step("Dropdown menu item", async () => {
      /** Get body of page */
      const body = canvasElement.ownerDocument.body;
      /** Select first menu item from the navigation */
      const menuItem = canvas.getByTestId("navigation-items-container")
        .children[0];

      /** Test click on dropdown menu item */
      await expect(menuItem.getAttribute("data-state")).toBe("closed");
      await userEvent.click(menuItem);
      await expect(menuItem.getAttribute("data-state")).toBe("open");

      /** Test if dropdown menu is displayed as expected */
      const dropdownMenuContent = await within(body).findByTestId(
        "navigation-dropdown-content",
      );
      const menuItems = await within(body).findAllByTestId(
        "navigation-dropdown-menu-item",
      );
      await expect(dropdownMenuContent).toBeInTheDocument();
      await expect(menuItems[0].textContent).toBe("Subitem 1");
    });

    await step("Settings", async () => {
      const settingsContainer = canvas.getByTestId("navigation-settings");
      /** Settings container should be displayed in the navigation bar */
      await expect(settingsContainer).toBeInTheDocument();
      const svgIcon = settingsContainer.children[0].children[0];
      /** Settings container should contain an svg element with classname 'fa-gear' */
      await expect(svgIcon.classList.contains("fa-gear")).toBeTruthy();
    });
  },
};

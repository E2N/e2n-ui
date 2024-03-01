import { StoryObj } from '@storybook/react';
import { SideNav2 } from '.';
import { SideNavProps } from './types';
import { ContentWithHeader, ContentWithSidenav } from '../Layout';
import {
  NavigationHeader,
  Section,
  NavigationButton as SideNavButton,
} from './components';
import {
  Navigation,
  NavigationDropdownButton,
  NavigationButton,
} from '../Navigation';
import {
  faBabyCarriage,
  faCar,
  faEnvelope,
  faFileSignature,
  faPeopleGroup,
  faTerminal,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/SideNav2',
  component: SideNav2,
  parameters: {
    layout: 'fullscreen',
  },
};

const PrimaryItems = [
  <NavigationDropdownButton trigger="Item 1" key="abc">
    <div>Subitem 1</div>
    <div>Subitem 2</div>
  </NavigationDropdownButton>,
  <NavigationButton key="xyz">Item 2</NavigationButton>,
  <NavigationButton key="sds">Item 3</NavigationButton>,
  <NavigationDropdownButton key="assda" trigger="Item 4">
    <div>Subitem 1</div>
    <div>Subitem 2</div>
    <div>Subitem 3</div>
  </NavigationDropdownButton>,
];

const SidenavItems = [
  <Section title="Title" key="abc">
    <SideNavButton icon={faPeopleGroup} title="Item 1">
      <SideNavButton icon={faUser} title="Subitem" />
      <SideNavButton icon={faUser} title="Subitem 2" />
    </SideNavButton>
    <SideNavButton icon={faFileSignature} title="Item 2" />
    <SideNavButton icon={faTerminal} title="Item 3">
      <SideNavButton icon={faUser} title="Subitem" />
      <SideNavButton icon={faEnvelope} title="Subitem 2" />
      <SideNavButton icon={faCar} title="Subitem 2" />
      <SideNavButton icon={faBabyCarriage} title="Subitem 2" />
    </SideNavButton>
  </Section>,
];

export const Default: StoryObj<SideNavProps> = {
  render: (args) => {
    return (
      <ContentWithHeader
        Main={
          <ContentWithSidenav
            Sidenav={<SideNav2 {...args} sidenavItems={SidenavItems} />}
            Main={<div>Main content</div>}
          />
        }
        Header={<Navigation label="navigation" menuItems={PrimaryItems} />}
      />
    );
  },
  args: {
    label: 'sidenav',
    isCollapsable: true,
    // theme: darkTheme,
    isDraggable: true,
  },
};

export const WithoutHeader: StoryObj<SideNavProps> = {
  render: (args) => {
    return (
      <ContentWithSidenav
        Sidenav={
          <SideNav2
            {...args}
            renderHeader={() => (
              <NavigationHeader>
                {/* <img className={cx(getHeaderStyles())} src={logo} /> */}
                Header
              </NavigationHeader>
            )}
          />
        }
        Main={<div>Main content</div>}
      />
    );
  },
  args: {
    label: 'sidenav',
    isCollapsable: true,
    isDraggable: true,
    // theme: darkTheme,
  },
};

import { css } from '@emotion/css';
import {
  faAddressBook,
  faDatabase,
  faEnvelope,
  faFileContract,
  faFolder,
  faNewspaper,
  faTrashCan,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { SideNav } from './SideNav';
import { H3 } from '../Headings';

export default {
  title: 'Layout/SideNav/SideNav',
  component: SideNav,
};

const items = [
  {
    name: 'Item 1',
    href: '/foo',
    icon: faUser,
  },
  {
    name: 'Item 2',
    href: '/foo',
    icon: faFileContract,
  },
  {
    name: 'Item 3',
    href: '/foo',
    icon: faNewspaper,
  },
  {
    name: 'Header 1',
    href: '/foo',
    icon: faDatabase,
    children: [
      {
        name: 'Subitem 1',
        href: '/foo',
        icon: faAddressBook,
      },
      {
        name: 'Subitem 2',
        href: '/foo',
        icon: faEnvelope,
      },
      {
        name: 'Subitem 3',
        href: '/foo',
        icon: faTrashCan,
      },
    ],
  },
  {
    name: 'Item 4',
    href: '/foo',
    icon: faFolder,
  },
];

const Header = () => {
  return <H3>Header</H3>;
};

export const Default = {
  render: () => {
    return (
      <SideNav
        header={<Header />}
        sideNavItems={items}
        className={css({ width: 260 })}
      />
    );
  },
};

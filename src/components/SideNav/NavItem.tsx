import { css, cx } from '@emotion/css';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useResolvedPath,
} from 'react-router-dom';
import { colorPalette, theme } from '../../theme';
import { LinkSideNavItem, ReactRouterSideNavItem } from './SideNav';

export type NavItem = {
  item: ReactRouterSideNavItem | LinkSideNavItem;
};

function navItemWrapperStyles({
  match,
}: {
  match?: boolean;
  expanded?: boolean;
}) {
  return {
    wrapper: css({
      backgroundColor: match ? colorPalette.white : '',
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      borderRadius: theme.borderRadius.xs,
      boxShadow: match ? '#e0e1e7 0px 1px 4px' : '',
      fontFamily: theme.fontFamily.sansSerif,
      transition: '0.2s',
      ':hover, :focus': {
        backgroundColor: match ? colorPalette.white : colorPalette.grey200,
        cursor: 'pointer',
      },
    }),
    link: css({
      color: match ? colorPalette.primaryDarker : colorPalette.grey500,
      textDecoration: 'none',
      transition: '0.2s',
      fontWeight: match ? theme.weight.bold : '',
    }),
    header: css({
      color: colorPalette.grey500,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: '0.2s',
      ':hover,:focus': {
        cursor: 'pointer',
      },
    }),
  };
}

function ReactRouterNavLink({ item }: { item: ReactRouterSideNavItem }) {
  const current = useLocation();
  const navigate = useNavigate();
  const resolved = useResolvedPath(item.to);
  const match = current.pathname.includes(resolved.pathname);
  const styles = navItemWrapperStyles({ match });

  return (
    <div
      className={cx('nav-item-wrapper', styles.wrapper)}
      onClick={() => navigate(item.to)}>
      <Link to={item.to} className={(cx('nav-item-link'), styles.link)}>
        {item.icon && (
          <FontAwesomeIcon
            icon={item.icon}
            style={{ marginRight: 16 }}
            color={match ? colorPalette.primaryMain : colorPalette.grey500}
          />
        )}
        {item.name}
      </Link>
    </div>
  );
}

export function NavLink({ item }: { item: LinkSideNavItem }) {
  const styles = navItemWrapperStyles({ match: false, expanded: false });
  return (
    <div className={cx('nav-item-wrapper', styles.wrapper)}>
      <a href={item.href} className={(cx('nav-item-link'), styles.link)}>
        {item.icon && (
          <FontAwesomeIcon
            icon={item.icon}
            style={{ marginRight: 16 }}
            color={colorPalette.grey500}
          />
        )}
        {item.name}
      </a>
    </div>
  );
}

function ReactRouterSideNavItemHeader({
  item,
}: {
  item: ReactRouterSideNavItem;
}) {
  const { name, to } = item;
  const children = item.children as ReactRouterSideNavItem[];
  const location = useLocation();

  const [expanded, setExpanded] = useState(
    location.pathname.includes(to.toString()),
  );

  const styles = navItemWrapperStyles({ expanded });

  const onChangeExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={cx('nav-item-header', styles.wrapper)}>
        <div
          onClick={onChangeExpand}
          className={cx('nav-item-header', styles.header)}>
          <div>
            {item.icon && (
              <FontAwesomeIcon icon={item.icon} style={{ marginRight: 16 }} />
            )}
            {name}
          </div>
          <FontAwesomeIcon icon={!expanded ? faChevronDown : faChevronUp} />
        </div>
      </div>
      {expanded &&
        children.map((item, index) => {
          const { children } = item;

          return (
            <div className="ps-16px" key={index}>
              {children ? (
                <ReactRouterSideNavItemHeader key={index} item={item} />
              ) : (
                <ReactRouterNavLink item={item} />
              )}
            </div>
          );
        })}
    </>
  );
}

function LinkSideNavItemHeader({ item }: { item: LinkSideNavItem }) {
  const { name } = item;
  const children = item.children as LinkSideNavItem[];

  const [expanded, setExpanded] = useState(false);

  const styles = navItemWrapperStyles({ expanded });

  const onChangeExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={cx('nav-item-header', styles.wrapper)}>
        <div
          onClick={onChangeExpand}
          className={cx('nav-item-header', styles.header)}>
          <div>
            {item.icon && (
              <FontAwesomeIcon icon={item.icon} style={{ marginRight: 16 }} />
            )}
            {name}
          </div>
          <FontAwesomeIcon icon={!expanded ? faChevronDown : faChevronUp} />
        </div>
      </div>
      {expanded &&
        children.map((item, index) => {
          const { children } = item;

          return (
            <div className="ps-16px" key={index}>
              {children ? (
                <LinkSideNavItemHeader key={index} item={item} />
              ) : (
                <NavLink item={item} />
              )}
            </div>
          );
        })}
    </>
  );
}

export function NavItem({ item }: NavItem) {
  const { children } = item;

  return 'href' in item ? (
    children ? (
      <LinkSideNavItemHeader item={item} />
    ) : (
      <NavLink item={item} />
    )
  ) : children ? (
    <ReactRouterSideNavItemHeader item={item} />
  ) : (
    <ReactRouterNavLink item={item} />
  );
}

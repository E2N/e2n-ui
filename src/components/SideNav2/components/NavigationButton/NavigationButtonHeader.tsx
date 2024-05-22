import { css, cx } from '@emotion/css';
import { ReactNode, useState } from 'react';
import { getBaseStyles } from './getStyles';
import { colorPalette } from '../../../../theme';
import { useAtomValue } from 'jotai';
import {
  theme as themeAtom,
  isCollapsed as isCollapsedAtom,
} from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export function NavigationButtonHeader({
  children,
  title,
  icon,
}: {
  children: ReactNode;
  title: string;
  icon: IconDefinition;
}) {
  const theme = useAtomValue(themeAtom);
  const isCollapsed = useAtomValue(isCollapsedAtom);
  const [areChildrenVisible, setAreChildrenVisible] = useState(false);
  const styles = getBaseStyles(theme, isCollapsed, areChildrenVisible);

  const headerStyles = css({
    '.navigation-button-label-wrapper': {
      transform: areChildrenVisible ? 'translateX(16px)' : 'translateX(0)',
    },
    backgroundColor: areChildrenVisible ? colorPalette.grey200 : 'unset',
    ':hover, :focus, :focus-visible': areChildrenVisible
      ? {
          backgroundColor: colorPalette.grey300,
          '.navigation-button-icon, .navigation-button-label, .navigation-button-chevron-down':
            {
              color: theme.text.secondary,
              fontWeight: 400,
            },
        }
      : {},
  });

  return (
    <>
      <button
        onClick={() => setAreChildrenVisible(!areChildrenVisible)}
        className={cx(
          styles.container,
          'navigation-button-container',
          headerStyles,
        )}
      >
        <FontAwesomeIcon
          className={cx(styles.icon, 'navigation-button-icon')}
          fixedWidth
          icon={icon}
        />
        <div className={cx(styles.label, 'navigation-button-label')}>
          {title}
        </div>
        {children && (
          <FontAwesomeIcon
            className={cx(styles.chevronDown, 'navigation-button-chevron-down')}
            fixedWidth
            icon={faChevronDown}
          />
        )}
      </button>
      {areChildrenVisible &&
        (!isCollapsed ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: 16,
            }}
          >
            {areChildrenVisible && children}
          </div>
        ) : (
          children
        ))}
    </>
  );
}

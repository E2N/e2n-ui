import { IconButton } from '../../../Button';
import { IconButtonProps } from '../../../Button/IconButton';
import { css, cx } from '@emotion/css';
import { Theme, theme as e2nTheme } from '../../../../theme';
import { NavigationDropdown } from '../NavigationDropdown';
import { ReactNode } from 'react';
import { useTheme } from '../../theme';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function getStyles(theme: Theme) {
  return css({
    fontSize: e2nTheme.size.lg,
    color: 'green',
    cursor: 'pointer',
    height: 30,
    width: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    button: {
      fontSize: 16,
      ':focus': {
        outline: 'none',
      },
    },
    transition: '0.3s',
    ':hover, :focus-within': {
      backgroundColor: theme.actionState.hover,
      button: {
        color: theme.text.primary,
      },
    },
    '&[data-state="open"]': {
      backgroundColor: theme.actionState.hover,
      button: {
        color: theme.text.primary,
      },
    },
  });
}

export function Settings({
  children,
  ...props
}: Omit<IconButtonProps, 'icon'> & { children?: ReactNode }) {
  const theme = useTheme();
  const styles = getStyles(theme);

  const Trigger = (
    <div
      data-testid="navigation-settings"
      className={cx(styles, 'navigation-settings')}>
      <IconButton theme={theme} icon={faCog} {...props} />
    </div>
  );

  return <NavigationDropdown trigger={Trigger}>{children}</NavigationDropdown>;
}

import { css, cx } from '@emotion/css';
import { HTMLProps, ReactNode } from 'react';
import { colorPalette, theme } from '../../theme';

type CustomProps = {
  children: ReactNode;
  active?: boolean;
  onChangeTab?: (event?: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
};

type TabProps = HTMLProps<HTMLAnchorElement> & CustomProps;

function getTabStyles() {
  return {
    item: css({
      display: 'flex',
      position: 'relative',
      fontFamily: theme.fontFamily.sansSerif,
      fontWeight: theme.weight.regular,
    }),
    link: css({
      color: colorPalette.grey500,
      padding: theme.spacing.md,
      display: 'block',
    }),
    notActive: css({
      'a:hover, :hover, :focus': {
        color: colorPalette.primaryMain,
        cursor: 'pointer',
        '::before': {
          display: 'block',
          content: '" "',
          position: 'absolute',
          left: 0,
          right: 0,
          height: 4,
          borderRadius: 2,
          bottom: 0,
          background: colorPalette.grey200,
        },
      },
    }),
    active: css({
      color: colorPalette.primaryMain,
      fontWeight: theme.weight.bold,
      a: {
        color: colorPalette.primaryMain,
      },
      '::before': {
        display: 'block',
        content: '" "',
        position: 'absolute',
        left: 0,
        right: 0,
        height: 4,
        borderRadius: 2,
        bottom: 0,
        background: colorPalette.primaryMain,
      },
    }),
  };
}

export const Tab = ({
  children,
  active,
  onChangeTab,
  href,
  ...otherProps
}: TabProps) => {
  const styles = getTabStyles();
  const linkStyles = cx(
    'link',
    styles.link,
    active ? styles.active : styles.notActive,
  );
  return (
    <div className={cx('item', styles.item)}>
      <a
        href={href}
        className={linkStyles}
        {...otherProps}
        onClick={onChangeTab}>
        {children}
      </a>
    </div>
  );
};

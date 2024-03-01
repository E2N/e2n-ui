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
      fontSize: '0.875rem',
      alignItems: 'center',
      gap: '0.5rem',
    }),
    link: css({
      color: colorPalette.grey500,
      padding: '0.8125rem 0rem 0.75rem 0rem',
      flexDirection: 'column',
      justifyDontent: 'center',
      alignItems: 'center',
      display: 'block',
      gap: '2.5rem',
    }),
    notActive: css({
      'a:hover, :hover, :focus': {
        cursor: 'pointer',
        '::before': {
          display: 'block',
          content: '" "',
          position: 'absolute',
          left: 0,
          right: 0,
          height: 2,
          borderRadius: 2,
          bottom: 0,
          background: colorPalette.grey200,
        },
      },
    }),
    active: css({
      color: colorPalette.textLightPrimary,
      fontWeight: theme.weight.semibold,
      a: {
        color: colorPalette.textLightPrimary,
      },
      '::before': {
        display: 'block',
        content: '" "',
        position: 'absolute',
        left: 0,
        right: 0,
        height: 4,
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

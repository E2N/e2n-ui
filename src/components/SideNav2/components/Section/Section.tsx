import { ReactNode } from 'react';
import { Theme, colorPalette, spacingMap, typography } from '../../../../theme';
import { css, cx } from '@emotion/css';
import { useAtomValue } from 'jotai';
import {
  theme as themeAtom,
  isCollapsed as isCollapsedAtom,
} from '../../store';

export type SectionProps = {
  title?: string;
  children?: ReactNode;
};

function getStyles(theme: Theme) {
  return {
    container: css({
      display: 'flex',
      flexDirection: 'column',
      gap: spacingMap.xs,
      color: theme.text.secondary,
    }),
    label: css({
      ...typography.sidenavSectionTitle,
      padding: `${spacingMap.sm} 0`,
      textTransform: 'uppercase',
    }),
    divider: css({
      border: 0,
      borderTop: `1px solid ${colorPalette.greyTransparent24}`,
      height: 1,
      width: 16,
    }),
  };
}

export function Section({ title, children }: SectionProps) {
  const theme = useAtomValue(themeAtom);
  const isCollapsed = useAtomValue(isCollapsedAtom);
  const styles = getStyles(theme);

  return (
    <div className={cx('sidenav-section', styles.container)}>
      {title && !isCollapsed ? (
        <div className={cx('sidenav-label', styles.label)}>{title}</div>
      ) : (
        <hr className={cx('sidenav-divider', styles.divider)} />
      )}
      {children}
    </div>
  );
}

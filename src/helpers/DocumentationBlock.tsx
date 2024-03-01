import { ReactNode } from 'react';
import { colorPalette } from '../theme';
import { css, cx } from '@emotion/css';

function getStyles() {
  return {
    container: css({
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',
      backgroundColor: colorPalette.grey100,
      padding: 16,
      borderRadius: 4,
    }),
    component: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  };
}

export function DocumentationBlock({
  component,
  description,
}: {
  component: ReactNode;
  description: string;
}) {
  const styles = getStyles();
  return (
    <div className={cx(styles.container)}>
      <p>{description}</p>
      <div className={cx(styles.component)}>{component}</div>
    </div>
  );
}

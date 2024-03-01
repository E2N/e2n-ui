import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode } from 'react';

type CustomProps = {
  /** The `Sidenav` prop defines the sidenav component to be rendered. */
  Sidenav: ReactNode;
  /** The `Main` prop defines the main section to be rendered. */
  Main: ReactNode;
};

export type ContentWithSidenavProps = CustomProps &
  HTMLAttributes<HTMLDivElement>;

function getStyles() {
  return css({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr',
    height: 'inherit',
  });
}

/**
 * A React component that renders a content with a sidenav and a main section.
 *
 * @typedef {Object} ContentWithHeaderProps
 * @property {ReactNode} Header - The header component to be rendered.
 * @property {ReactNode} Main - The main section component to be rendered.
 *
 * @param {ContentWithHeaderProps} props - The props for the component.
 * @returns {ReactNode} - A React element representing the content with header and main sections.
 */
export function ContentWithSidenav({ Sidenav, Main }: ContentWithSidenavProps) {
  const styles = getStyles();
  return (
    <div className={cx(styles)}>
      {Sidenav}
      {Main}
    </div>
  );
}

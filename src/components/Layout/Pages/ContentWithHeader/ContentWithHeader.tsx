import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode } from 'react';

type CustomProps = {
  /** The `Header` prop defines the header component to be rendered. */
  Header: ReactNode;
  /** The `Main` prop defines the main section to be rendered. */
  Main: ReactNode;
};

export type ContentWithHeaderProps = CustomProps &
  HTMLAttributes<HTMLDivElement>;

const styles = {
  pagerWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }),
  header: css({
    flexShrink: 0,
  }),
  main: css({
    overflow: 'auto',
  }),
};

/**
 * A React component that renders a content with a header and a main section.
 *
 * @typedef {Object} ContentWithHeaderProps
 * @property {ReactNode} Header - The header component to be rendered.
 * @property {ReactNode} Main - The main section component to be rendered.
 *
 * @param {ContentWithHeaderProps} props - The props for the component.
 * @returns {ReactNode} - A React element representing the content with header and main sections.
 */
export function ContentWithHeader({ Header, Main }: ContentWithHeaderProps) {
  return (
    <div className={cx(styles.pagerWrapper)}>
      <div className={cx(styles.header)}>{Header}</div>
      <div className={cx(styles.main)}>{Main}</div>
    </div>
  );
}

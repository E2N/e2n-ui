import { css, cx } from '@emotion/css';
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { colorPalette, shadow, theme } from '../../theme';

type CustomProps = {
  ToolbarComponent?: ReactNode;
  TableComponent?: ReactNode;
  PaginatorComponent?: ReactNode;
  TabsBarComponent?: ReactNode;
  height?: number | string;
  isHeaderSticky?: boolean;
  isFooterSticky?: boolean;
};

type TableCardProps = CustomProps & HTMLAttributes<HTMLDivElement>;

function getCardStyles(
  hasToolbar: boolean,
  height?: number | string,
  isHeaderSticky?: boolean,
  isFooterSticky?: boolean,
  toolbarHeight?: number,
) {
  return {
    container: css({
      borderRadius: theme.borderRadius.md,
      backgroundColor: colorPalette.white,
      fontFamily: theme.fontFamily.sansSerif,
      boxShadow:
        'box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20);',
      border: `1px solid ${colorPalette.grey100}`,
      overflow: 'auto',
      height,

      table: {
        thead: {
          insetBlockStart: hasToolbar && toolbarHeight ? toolbarHeight - 1 : 0,
          color: `${colorPalette.grey600}`,
          ':active': {
            color: `${colorPalette.lightBlue}`,
          },
        },
      },
    }),
    toolBarContainer: css({
      position: isHeaderSticky ? 'sticky' : 'initial',
      insetBlockStart: isHeaderSticky ? 0 : undefined,
      backgroundColor: colorPalette.white,
      left: 0,
      right: 0,
      '& .toolBar': {
        padding: theme.spacing.md,
      },
      '& .tabsBar': {
        padding: '0.4375rem 1.5rem 1.25rem 1.5rem',
      },
    }),
    paginator: css({
      padding: '0.625rem 0.5rem 0.625rem 1.5rem',
      position: isFooterSticky ? 'sticky' : 'initial',
      insetBlockEnd: isFooterSticky ? 0 : undefined,
      backgroundColor: colorPalette.white,
      boxShadow: height ? shadow.tableFooter : undefined,
      left: 0,
      right: 0,
    }),
  };
}
/**
 *
 * @param param0 @deprecated
 * @returns
 */
export function TableCard({
  TableComponent,
  ToolbarComponent,
  PaginatorComponent,
  TabsBarComponent,
  height,
  isFooterSticky = true,
  isHeaderSticky = true,
}: TableCardProps) {
  const hasToolbar = ToolbarComponent ? true : false;
  const hasTabs = TabsBarComponent ? true : false;
  const [toolbarHeight, setToolbarHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setToolbarHeight(ref.current.clientHeight);
    }
  }, []);

  const styles = getCardStyles(
    hasToolbar,
    height,
    isHeaderSticky,
    isFooterSticky,
    toolbarHeight,
  );

  return (
    <div className={cx(styles.container)}>
      {hasTabs && !hasToolbar ? (
        <div className={cx(styles.toolBarContainer)} ref={ref}>
          <div className="tabsBar">{TabsBarComponent}</div>
        </div>
      ) : !hasTabs && hasToolbar ? (
        <div className={cx(styles.toolBarContainer)} ref={ref}>
          <div className="toolBar">{ToolbarComponent}</div>
        </div>
      ) : hasTabs && hasToolbar ? (
        <div className={cx(styles.toolBarContainer)} ref={ref}>
          <div className="tabsBar">{TabsBarComponent}</div>
          <div className="toolBar">{ToolbarComponent}</div>
        </div>
      ) : (
        ''
      )}
      {TableComponent}
      <div className={cx(styles.paginator)}>{PaginatorComponent}</div>
    </div>
  );
}

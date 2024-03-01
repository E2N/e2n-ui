import { css, cx } from '@emotion/css';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef } from '@tanstack/react-table';
import { theme, colorPalette } from '../../../theme';
import { Table } from '../Table';
import { defaultColumns } from './columns';
import { type Data, defaultData } from './data';

export default {
    title: 'Components/Table',
}; 

const subTableColumns: ColumnDef<Data>[] = [  {
    header: () => null,
    id: 'expander',
    maxSize: 25,
    cell: (info) => {
      const row = info.row;
      return (
        <FontAwesomeIcon
          className={cx(
            css({
              paddingLeft: theme.spacing.md,
              paddingRight: theme.spacing.md,
              ':hover': {
                cursor: 'pointer',
                color: colorPalette.grey500,
              },
            }),
          )}
          icon={
            row.getIsExpanded()
              ? faChevronDown
              : faChevronRight
          }
          onClick={() => {
            row.toggleSelected(true);
            row.toggleExpanded(!row.getIsExpanded());
          }}
        />
      );
    },
  },]

export const WithSubTable = {
  render: () => <Table<Data> columns={[...subTableColumns, ...defaultColumns]} data={defaultData} renderRowSubComponent={() => <div>Test</div>} />
};

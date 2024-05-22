import { RowSelectionState } from '@tanstack/react-table';
import { useState } from 'react';
import { Button } from '../../Button';
import { Table } from '../Table';
import { columnsSingleSelect } from './columnsSingleSelect';
import { data, type Location } from './data';

export default {
  title: 'Components/Table',
};

const HeaderSlot = ({
  disabled,
  originalRow,
}: {
  disabled: boolean;
  originalRow: Location[] | undefined;
}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        disabled={disabled}
        onClick={() => alert(JSON.stringify(originalRow))}
      >
        Sperren
      </Button>
    </div>
  );
};

export const WithRowSelection = {
  render: () => {
    const [originalRowSelection, setOriginalRowSelection] = useState<
      Location[] | undefined
    >();
    const [selectedRows, setSelectedRows] = useState<RowSelectionState>({});

    const selectedRowKeys = Object.keys(selectedRows);

    return (
      <Table<Location>
        data={data}
        columns={columnsSingleSelect}
        onRowSelectionChange={setSelectedRows}
        setOriginalRowSelection={setOriginalRowSelection}
        state={{ rowSelection: selectedRows }}
        enableMultiRowSelection={false}
        enableRowSelection={true}
        totalEntries={3}
        HeaderActionLabelText="Eintrag ausgewählt"
        ToolbarComponent={
          <HeaderSlot
            disabled={selectedRowKeys.length < 1}
            originalRow={originalRowSelection}
          />
        }
      />
    );
  },
};

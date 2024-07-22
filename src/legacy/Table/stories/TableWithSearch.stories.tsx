import { TextField } from '../../../components';
import { Table } from '../Table';
import { defaultColumns } from './columns';
import { Data, defaultData } from './data';

export default {
  title: 'Legacy/Table',
};

export const WithSearchField = {
  render: () => {
    return (
      <Table<Data>
        columns={defaultColumns}
        data={defaultData}
        totalEntries={5}
        ToolbarComponent={
          <TextField width={400} placeholder="Suche nach einem Vertrag…" />
        }
      />
    );
  },
};

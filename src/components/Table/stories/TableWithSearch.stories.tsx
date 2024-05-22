import { TextField } from '../../TextField';
import { Table } from '../Table';
import { defaultColumns } from './columns';
import { Data, defaultData } from './data';

export default {
  title: 'Components/Table',
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

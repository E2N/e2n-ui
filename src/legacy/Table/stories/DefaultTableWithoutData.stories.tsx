import { Table } from '../Table';
import { defaultColumns } from './columns';
import { Data } from './data';

export default {
  title: 'Legacy/Table',
};

export const DefaultWithoutData = {
  render: () => (
    <Table<Data> columns={defaultColumns} data={[]} totalEntries={5} />
  ),
};

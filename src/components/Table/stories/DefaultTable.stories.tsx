import { Table } from "../Table";
import { defaultColumns } from "./columns";
import { Data, defaultDataWithManyEntries } from "./data";

export default {
  title: "Components/Table",
};

export const Default = {
  render: () => (
    <Table<Data>
      columns={defaultColumns}
      data={defaultDataWithManyEntries}
      totalEntries={defaultDataWithManyEntries.length}
      paginatorCustomProps={{
        disableFirstLastPagination: false,
        showPageInputSelect: true,
      }}
    />
  ),
};

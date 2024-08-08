import { useState } from 'react';
import { Table } from '../Table';
import { defaultColumns } from './columns';
import { Data, defaultData } from './data';
import {
  Badge,
  LegacyTab,
  LegacyTabsBar,
  Select,
  TextField,
} from '../../../components';

export default {
  title: 'Legacy/Table',
};

const tabs = [
  { label: 'Zahlungsdaten', key: 'first', active: true },
  { label: 'Vertragsdaten', key: 'second', active: false },
  { label: 'Terminal', key: 'third', active: false },
];

const options: Array<{ value: string; label: string }> = [
  { value: 'successMain', label: 'successMain' },
  { value: 'errorLight', label: 'errorLight' },
  { value: 'primaryMain', label: 'primaryMain' },
];

export const WithTabsAndSearch = {
  render: () => {
    const [state, setState] = useState(tabs);
    return (
      <Table<Data>
        columns={defaultColumns}
        data={defaultData}
        totalEntries={5}
        TabsBarComponent={
          <LegacyTabsBar>
            {state.map((tab, index) => (
              <LegacyTab
                key={index}
                active={tab.active}
                onChangeTab={() =>
                  setState(
                    state.map((tab, idx) => ({
                      ...tab,
                      active: idx === index,
                    })),
                  )
                }>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {tab.label}
                  <Badge variant="success" text="23" />
                </div>
              </LegacyTab>
            ))}
          </LegacyTabsBar>
        }
        ToolbarComponent={
          <>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex' }}>
                <TextField
                  width={400}
                  placeholder="Suche nach einem Vertrag…"
                />
              </div>
              <div
                style={{
                  marginLeft: '0.5rem',
                  width: '15rem',
                }}>
                <Select isMulti options={options} />
              </div>
            </div>
          </>
        }
      />
    );
  },
};

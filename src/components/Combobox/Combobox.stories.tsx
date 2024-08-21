import { Combobox } from './Combobox';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCheck,
  faDotCircle,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value: 'backlog',
    label: 'Backlog',
  },
  {
    value: 'todo',
    label: 'Todo',
  },
  {
    value: 'in progress',
    label: 'In Progress',
  },
  {
    value: 'done',
    label: 'Done',
  },
  {
    value: 'canceled',
    label: 'Canceled',
  },
];

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export default {
  title: 'Components/Combobox',
  tags: ['autodocs'],
  component: Combobox,
};

export function Default() {
  const [value, setValue] = React.useState('');
  return (
    <Combobox
      trigger={
        <Button
          variant="outline"
          role="combobox"
          className="w-[200px] justify-between">
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}
          <FontAwesomeIcon
            icon={faCaretDown}
            className="ml-2 h-4 w-4 shrink-0 opacity-50"
          />
        </Button>
      }
      itemList={frameworks}
      setOption={(currentValue) => {
        setValue(currentValue === value ? '' : currentValue);
      }}
      placeholder="Framework auswählen"
      icon={faDotCircle}
      labelProp={
        <>
          <ul className="list-disc pl-2">
            <li className="text-red-600 ms-2 text-lg"></li>
          </ul>
        </>
      }></Combobox>
  );
}

export function ComboboxPopover() {
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null,
  );

  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-slate-500">Framework</p>
      <Combobox
        trigger={
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        }
        itemList={frameworks}
        icon={faCheck}
        setOption={(value) => {
          setSelectedStatus(
            statuses.find((priority) => priority.value === value) || null,
          );
        }}
        placeholder="Framework auswählen"></Combobox>
    </div>
  );
}

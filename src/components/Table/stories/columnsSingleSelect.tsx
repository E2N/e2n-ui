import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '../../Badge';
import { IndeterminateCheckbox } from '../IndeterminateCheckbox';
import { TableColumnDef } from '../types';
import { type Data, type Contract, type Location } from './data';

export const columnsSingleSelect: TableColumnDef<Location>[] = [
  {
    id: 'select',
    size: 25,
    cell: ({ row }) => {
      return (
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      );
    },
  },
  {
    accessorKey: 'locationGroupId',
    header: 'Nr.',
    enableSorting: false,
  },
  {
    accessorKey: 'name',
    header: 'Standort',
  },
  {
    accessorKey: 'key',
    header: 'Schlüssel',
    enableSorting: false,
    cell: (info) => {
      return <Badge text={info.getValue() as string} />;
    },
  },
  {
    accessorKey: 'numberOfEmployees',
    header: '#MA',
    type: 'rightAligned',
    size: 50,
    cell: (info) => {
      return (
        <div style={{ textAlign: 'right' }}>{info.getValue() as number}</div>
      );
    },
  },
  {
    accessorKey: 'maxNumberOfEmployees',
    header: '<MA',
    size: 50,
    cell: (info) => {
      return (
        <div style={{ textAlign: 'right' }}>{info.getValue() as number}</div>
      );
    },
  },
  {
    id: 'contractType',
    accessorFn: (row) => row.contract,
    header: 'Vertragsart',
    cell: (info) => {
      const contract = info.getValue() as Contract;
      return <Badge text={contract.type} variant="success" />;
    },
  },
  {
    id: 'contractValidUntil',
    accessorFn: (row) => row.contract,
    header: 'Gültig bis',
    enableSorting: false,
    cell: (info) => {
      const contract = info.getValue() as Contract;
      return contract.validUntil.toDateString();
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Erstellt am',
    enableSorting: false,
    cell: (info) => {
      const value = new Date(info.getValue() as string);
      return value.toLocaleDateString();
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Geändert am',
    enableSorting: false,
    cell: (info) => {
      const value = new Date(info.getValue() as string);
      return value.toLocaleDateString();
    },
  },
];

export const defaultColumns: ColumnDef<Data>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: () => {
      return (
        <>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </>
      );
    },
  },
  {
    accessorKey: 'numberOfLocations',
    id: 'NumberOfLocations',
    header: 'Standorte',
  },
  {
    accessorKey: 'numberOfEmployees',
    header: 'Mitarbeiter',
  },
];

import { Meta } from '@storybook/react';
import { Label } from './Label';
import { Input } from '../Input';

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ['autodocs'],
  title: 'Components/Label',
};

export default meta;

export const Default = {
  render: () => {
    return (
      <div>
        <Label htmlFor="Pommes">Pommes in Kg</Label>
        <Input className="w-44" id="Pommes"></Input>
      </div>
    );
  },
};

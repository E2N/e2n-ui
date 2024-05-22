import { Checkbox, CheckboxProps } from './Checkbox';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
  },
};
export default meta;

export const Default = {
  name: 'Default',
  render: (args: CheckboxProps) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="default" {...args} />
      <label
        htmlFor="default"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

/** Deaktivierte Checkbox mit ausgegrautem Label Text */
export const Disabled = {
  name: 'Disabled',
  render: (args: CheckboxProps) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" {...args} />
      <label
        htmlFor="disabled"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
  args: {
    disabled: true,
  },
};

export const Checked = {
  name: 'Checked',
  render: (args: CheckboxProps) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" {...args} />
      <label
        htmlFor="disabled"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
  args: {
    checked: true,
  },
};

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  paramters: {
    controls: {
      exclude: ['className', 'defaultChecked'],
    },
  },
};

export const Default = {
  render: (args: CheckboxProps) => <Checkbox {...args} />,
  args: {
    label: 'Die Richtigkeit der Angaben wurde bestätigt',
    value: 'Option 1',
    disabled: true,
  },
};

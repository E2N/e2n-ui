import { Select } from '.';

export default {
  title: 'components/Select',
  component: Select,
};

const options: Array<{ value: string; label: string }> = [
  { value: 'successMain', label: 'successMain' },
  { value: 'errorLight', label: 'errorLight' },
  { value: 'primaryMain', label: 'primaryMain' },
];

export const Default = {
  render: () => <Select options={options} label="Label" />,
};

export const Multi = {
  render: () => <Select isMulti options={options} />,
};

export const MultiWithAnimation = {
  render: () => <Select isMulti options={options} isAnimated />,
};

import { StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/test';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Default: StoryObj<typeof Switch> = {
  render: (args) => <Switch {...args} />,
  args: {
    disabled: false,
    onCheckedChange: () => console.log('changed'),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Toggle between states', async () => {
      const switchComponent = canvas.getByTestId('switch');

      await expect(switchComponent.getAttribute('data-state')).toBe(
        'unchecked',
      );
      await userEvent.click(switchComponent);
      await expect(switchComponent.getAttribute('data-state')).toBe('checked');
      await userEvent.click(switchComponent);
      await expect(switchComponent.getAttribute('data-state')).toBe(
        'unchecked',
      );
    });
  },
};

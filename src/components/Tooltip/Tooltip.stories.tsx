import { StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { TooltipProps } from './types';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from '..';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dytYKVyXYobjZXq0BDPFsK/e2n-Web.21.09.23?node-id=1810%3A127553&mode=dev',
    },
  },
};

export const Default: StoryObj<TooltipProps> = {
  render: (args: TooltipProps) => (
    <Tooltip
      {...args}
      trigger={
        <Button
          type="button"
          style={{ marginLeft: 150, marginTop: 50, marginBottom: 50 }}>
          Button
        </Button>
      }>
      Hier steht dein Tooltip Text!
    </Tooltip>
  ),
  args: {
    variant: 'default',
    side: 'right',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Tooltip container', async () => {
      const tooltipComponent = canvas.getByTestId('tooltipContainer');
      await expect(tooltipComponent).toBeInTheDocument();
      await userEvent.hover(tooltipComponent);
    });
  },
};

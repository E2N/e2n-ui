import { CopyToClipboard, CopyToClipboardProps } from './CopyToClipboard';
import { StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/CopyToClipboard',
  component: CopyToClipboard,
};

export const Default: StoryObj<CopyToClipboardProps> = {
  render: (args: CopyToClipboardProps) => <CopyToClipboard {...args} />,
  args: {
    value: 'Diesen Text kannst du Zwischenspeichern.',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('CopyToClipboard container', async () => {
      const copyToClipboardComponent = canvas.getByTestId(
        'copyToClipboardContainer',
      );
      await expect(copyToClipboardComponent).toBeInTheDocument();
      await userEvent.hover(copyToClipboardComponent);
    });
  },
};

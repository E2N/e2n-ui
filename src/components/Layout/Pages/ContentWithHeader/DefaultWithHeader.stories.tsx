import { Meta, StoryObj } from '@storybook/react';
import { ContentWithHeader } from './ContentWithHeader';

const meta: Meta<typeof ContentWithHeader> = {
  title: 'Layout/Pages/ContentWithHeader',
  component: ContentWithHeader,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    Header: {
      control: false,
    },
    Main: {
      control: false,
    },
  },
};
export default meta;

/**
 * Simple page with header and content.
 */
export const Default: StoryObj<typeof ContentWithHeader> = {
  render: (args) => <ContentWithHeader Header={args.Header} Main={args.Main} />,
  args: {
    Header: <div style={{ backgroundColor: 'green' }}>Header</div>,
    Main: (
      <div style={{ backgroundColor: 'lightgreen', height: '1000px' }}>
        Scrollable Main Content
      </div>
    ),
  },
};

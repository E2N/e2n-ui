import { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'Layout/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      content={<div style={{ height: 200, width: 300 }}>Dropdown content</div>}
      isOpen={isOpen}
      placement="bottom-start"
      setIsOpen={setIsOpen}>
      <Button>Dropdown öffnen </Button>
    </Dropdown>
  );
};

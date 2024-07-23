import { StoryObj } from '@storybook/react';
import { Toast, ToastProps } from './Toast';
import { Toaster } from './Toaster';
import { Button } from '../Button';
import { useToast } from './useToast';

function ToastExample() {
  const { toast } = useToast();
  return (
    <>
      <Toaster />
      <Button
        onClick={() => {
          toast({
            title: 'Taylor Swift enters the stage',
            description: 'Tuesday, July 23, 2024 at 19:30 PM',
          });
        }}>
        Show Toast
      </Button>
    </>
  );
}

export default {
  title: 'Components/Toast',
  tags: ['autodocs'],
  component: Toast,
};

export const Default: StoryObj<ToastProps> = {
  render: () => <ToastExample />,
  args: {
    variant: 'default',
  },
};

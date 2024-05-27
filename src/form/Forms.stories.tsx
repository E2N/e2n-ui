import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button, Input } from '..';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from './Forms';
import { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof Form> = {
  component: Form,
  render: () => {
    const FormSchema = z.object({
      username: z.string().min(2, {
        message: 'Username muss mindestens 2 Zeichen lang sein.',
      }),
    });
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: '',
      },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log(data);
    }

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
  tags: ['autodocs'],
  title: 'Forms/Form',
};

export default meta;

export const ExampleForm = {
  render: () => {
    const FormSchema = z.object({
      username: z.string().min(2, {
        message: 'Username muss mindestens 2 Zeichen lang sein.',
      }),
    });
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: '',
      },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log(data);
    }

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};

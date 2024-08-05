import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tab';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  component: Tabs,
};

export const Default = {
  render: () => (
    <>
      <Tabs defaultValue="item1" style={{ width: 400 }}>
        <TabsList>
          <TabsTrigger value="item1">Item 1</TabsTrigger>
          <TabsTrigger value="item2">Item 2</TabsTrigger>
          <TabsTrigger value="item3">Item 3</TabsTrigger>
        </TabsList>
        <TabsContent value="item1">Test content 1</TabsContent>
        <TabsContent value="item2">Test content 2</TabsContent>
        <TabsContent value="item3">Test content 3</TabsContent>
      </Tabs>
    </>
  ),
  args: {
    variant: 'default',
  },
};

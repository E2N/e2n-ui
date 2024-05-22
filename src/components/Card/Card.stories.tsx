import { Card } from './Card';

export default {
  title: 'Layout/Container',
  component: Card,
};

export const Default = {
  render: () => (
    <Card
      header="Das ist eine Überschrift"
      content={<div>Das hier ist Content.</div>}
    />
  ),
};

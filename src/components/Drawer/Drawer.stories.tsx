import { useState } from 'react';
import { Button } from '..';
import { Drawer } from './Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="app">
        <Button onClick={() => setIsOpen(!isOpen)}>Öffnen</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          header="Terminal erstellen"
          enableDismiss={true}
          footer={
            <div className="d-flex justify-content-end">
              <Button>Speichern</Button>
            </div>
          }
          position="right">
          <p>The drawer content!</p> <input type="text" />{' '}
        </Drawer>
      </div>
    );
  },
};

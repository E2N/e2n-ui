import { useState } from 'react';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { Dropdown } from './Dropdown';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Layout/Dropdown',
  component: Dropdown,
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Dropdown
        content={
          <div style={{ height: 200, width: 300 }}>Dropdown content</div>
        }
        isOpen={isOpen}
        placement="bottom-start"
        setIsOpen={setIsOpen}>
        <Button>Dropdown öffnen </Button>
      </Dropdown>
    );
  },
};

export const DefaultWithTextField = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Dropdown
        content={
          <div style={{ height: 200, width: 300 }}>
            <a href="https://google.com">Link</a>
          </div>
        }
        isOpen={isOpen}
        placement="bottom-start"
        setIsOpen={setIsOpen}>
        <TextField
          width={300}
          inputAdornment={faSearch}
          placeholder="Suche nach…"
        />
      </Dropdown>
    );
  },
};

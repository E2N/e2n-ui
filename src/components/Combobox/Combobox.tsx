import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import { Command } from '../Command';
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../Command/Command';
import { ReactElement, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '../../lib/utils';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type listItem = {
  value: string;
  label: string;
};
interface CustomComboBoxProps {
  itemList: listItem[];
  placeholder?: string;
  emptyList?: string;
  trigger: ReactNode;
  icon: IconProp;
  setOption: (value: React.SetStateAction<string>) => void | '';
  labelProp?: string | ReactElement;
}

export function Combobox({
  itemList,
  trigger,
  labelProp,
  icon,
  placeholder,
  setOption,
  emptyList,
}: CustomComboBoxProps) {
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandList>
            <CommandEmpty>{emptyList}</CommandEmpty>
            <CommandGroup>
              {itemList?.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(true);
                    {
                      setOption(value);
                    }
                  }}>
                  {labelProp} {item.label}
                  <FontAwesomeIcon
                    className={cn(
                      'ml-auto h-4 w-4 text-primary-main',
                      value === item.value ? 'opacity-100' : 'opacity-0',
                    )}
                    icon={icon}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

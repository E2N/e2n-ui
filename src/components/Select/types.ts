import { GroupBase, OptionProps, Props, SingleValueProps } from 'react-select';
import { Theme } from '../..';

export type SelectOptionsProps<T> = OptionProps<T>;
export type SelectSingleValueProps<T> = SingleValueProps<T>;

export type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Omit<Props<Option, IsMulti, Group>, 'theme'> & {
  label?: string;
  isAnimated?: boolean;
  theme?: Theme;
  isValid?: boolean;
  description?: string;
  'data-testid'?: string;
};

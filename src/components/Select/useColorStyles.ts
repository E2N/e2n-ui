import { StylesConfig } from 'react-select';
import chroma from 'chroma-js';

export function useColorStyles<
  O extends Record<'color', string | null>,
>(): StylesConfig<O, true> {
  return {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color || '');
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? data.color || ''
            : isFocused
              ? color.alpha(0.1).css()
              : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color || '',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color || ''
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color || '');
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color || '',
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color || '',
      ':hover': {
        backgroundColor: data.color || '',
        color: 'white',
      },
    }),
  };
}

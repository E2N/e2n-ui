import { colorPalette } from '../../theme';
import { Select } from '../Select';

interface PaginatorSelectProps {
  defaultSelected: number;
  onChange: (value?: number) => void;
}

export const PaginatorSelect = (props: PaginatorSelectProps) => {
  const options = [10, 20, 30, 40, 50].map((t) => {
    return {
      value: t,
      label: t,
    };
  });

  const defaultValue = {
    label: props.defaultSelected,
    value: props.defaultSelected,
  };

  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      onChange={(option) => {
        props.onChange(option?.value);
      }}
      menuPortalTarget={document.body}
      menuPlacement="auto"
      styles={{
        container: (styles) => {
          return {
            ...styles,
            width: 75,
          };
        },
        control: (styles, state) => {
          return {
            ...styles,
            border:
              state.isFocused && state.menuIsOpen
                ? `1px solid ${colorPalette.grey200}`
                : '1px solid transparent',
            boxShadow: 'none',
            backgroundColor: colorPalette.grey200,
            ':hover': {
              border: `1px solid ${colorPalette.grey200}`,
            },
          };
        },
        menuPortal: (base) => {
          return {
            ...base,
            zIndex: 9999,
          };
        },
      }}
    />
  );
};

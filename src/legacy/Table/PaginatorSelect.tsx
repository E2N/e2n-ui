import { Select } from '../../components';
import { colorPalette } from '../../theme';

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
            height: '1.375rem',
            display: 'flex',
            padding: '2px 0',
            minHeight: '28px',
            backgroundColor: colorPalette.grey100,
            alignItems: 'baseline',
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

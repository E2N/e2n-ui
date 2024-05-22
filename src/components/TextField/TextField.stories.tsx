import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TextField } from './TextField';

export default {
  title: 'Components/TextField/Default',
  component: TextField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dytYKVyXYobjZXq0BDPFsK/e2n-admin.18.04.23?node-id=85%3A8567&t=tOdmpeO4QYOISGNJ-1',
    },
  },
};

export const Default = {
  render: () => (
    <TextField placeholder="Type something…" width={300} label="TextField" />
  ),
};

export const Password = {
  render: () => (
    <TextField
      type="password"
      placeholder="Enter password"
      width={300}
      label="Password"
    />
  ),
};

export const ValidationErrorState = {
  render: () => (
    <TextField
      placeholder="Type something…"
      width={300}
      label="TextField"
      isValid={false}
      description="postcode must be at least 10 characters"
    />
  ),
};

export const DisabledState = {
  render: () => (
    <TextField
      placeholder="Type something…"
      disabled
      width={300}
      label="TextField"
    />
  ),
};

export const WithAdornment = {
  render: () => (
    <TextField
      inputAdornment={faSearch}
      placeholder="Type something…"
      width={300}
      label="TextField"
    />
  ),
};

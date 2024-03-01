import { MultilineTextField } from './MultilineTextField';

export default {
  title: 'Components/TextField/Multiline',
  component: MultilineTextField,
};

export const Default = {
  render: () => (
    <MultilineTextField
      label="Label"
      placeholder="Type something ..."
      description="Hier steht eine Beschreibung"
      defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
  ),
};

export const Resizable = {
  render: () => (
    <MultilineTextField
      label="Label"
      placeholder="Type something ..."
      resizable={false}
      width={500}
      height={75}
      description="Hier steht eine Beschreibung"
      defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
  ),
};

export const WithValidationErrors = {
  render: () => (
    <MultilineTextField
      label="Label"
      placeholder="Type something ..."
      isValid={false}
      description="Hier steht eine Beschreibung"
      defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
  ),
};

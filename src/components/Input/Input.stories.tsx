import { Input } from "./Input";
import { Button } from "../Button";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  title: "Components/Input",
};

export default meta;

export const Default = {
  render: () => {
    return (
      <>
        <div className="mb-4 w-1/2">
          <Input type="email" placeholder="Email" />
        </div>
      </>
    );
  },
};

export const Disabled = {
  name: "Deaktiviert",
  render: () => (
    <div className="flex items-center space-x-2">
      <Input disabled type="email" placeholder="Email" className="mb-4 w-1/2" />
    </div>
  ),
};

export const WithButton = {
  name: "Mit Button",
  render: () => (
    <div className="flex w-1/2 items-center space-x-2 mb-4">
      <Input type="email" placeholder="Email" />
      <Button type="submit" className="bg-primary-main">
        Subscribe
      </Button>
    </div>
  ),
};

export const WithLabel = {
  name: "Mit Label",
  render: () => (
    <div className="grid w-1/2 items-center gap-1.5">
      <label htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

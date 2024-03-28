import { Dropdown2 } from "./Dropdown2";
import { Avatar } from "../Avatar";
import { DropdownMenuItem } from "./DropdownMenuItem";
import { DropdownMenuLabel } from ".";
import { darkTheme } from "../..";

export default {
  title: "Layout/Dropdown2",
  component: Dropdown2,
};

export const Default2 = {
  render: () => {
    return (
      <Dropdown2 theme={darkTheme} trigger={<Avatar imgSrc="" />}>
        <DropdownMenuItem>Ausblenden</DropdownMenuItem>
        <DropdownMenuLabel>Grösse</DropdownMenuLabel>
        <DropdownMenuItem>Klein</DropdownMenuItem>
        <DropdownMenuItem>Groß</DropdownMenuItem>
      </Dropdown2>
    );
  },
};

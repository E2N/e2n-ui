import { Table } from "../Table";
import { columns } from "./columns";
import { data, type Location } from "./data";
import { Button } from "../..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Table",
};

const Example = () => {
  return (
    <Table<Location>
      data={data}
      columns={columns}
      enableMultiRowSelection={true}
      enableRowSelection={true}
      totalEntries={3}
      HeaderActionLabelText="ausgewählte Zeilen"
      HeaderActionComponent={
        <>
          <div style={{ display: "flex" }}>
            <Button style={{ marginRight: "1rem", borderRadius: "1rem" }}>
              {" "}
              <FontAwesomeIcon icon={faPlus} />
            </Button>

            <Button style={{ marginRight: "1rem", borderRadius: "1rem" }}>
              {" "}
              <FontAwesomeIcon icon={faCheck} />
            </Button>

            <Button style={{ marginRight: "1rem", borderRadius: "1rem" }}>
              {" "}
              <FontAwesomeIcon icon={faMinus} />
            </Button>
          </div>
        </>
      }
    />
  );
};

export const WithRowSelectionAndToolbar = {
  render: () => <Example />,
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export function ButtonIcon({ icon }: { icon: IconDefinition }) {
  return (
    <Button variant="outline" size="icon">
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconDefinition;
}

export function IconButton({ icon, ...otherProps }: IconButtonProps) {
  return (
    <Button variant="outline" size="icon" {...otherProps}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}

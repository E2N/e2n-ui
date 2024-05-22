import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';

import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Legacy/Buttons/ButtonGroup',
  component: ButtonGroup,
};

export const Basic = {
  render: () => {
    return (
      <ButtonGroup>
        <Button fill="outline">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Button fill="outline">Heute</Button>
        <Button fill="outline">
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </ButtonGroup>
    );
  },
};

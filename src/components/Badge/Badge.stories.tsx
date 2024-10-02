import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from './Badge';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Default = {
  render: () => <Badge>Badge</Badge>,
};

export const Secondary = {
  render: () => <Badge variant="secondary">Secondary</Badge>,
};

export const Outline = {
  render: () => <Badge variant="outline">Outline</Badge>,
};

export const Destructive = {
  render: () => <Badge variant="destructive">Destructive</Badge>,
};

export const Icon = {
  render: () => (
    <Badge className="p-3 bg-teal-600 rounded-md">
      <FontAwesomeIcon icon={faEdit} fixedWidth />
    </Badge>
  ),
};

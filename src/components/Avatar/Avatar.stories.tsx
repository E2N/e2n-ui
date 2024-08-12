import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import defaultImage from './defaultAvatar.png';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export const Default = {
  render: () => (
    <Avatar>
      <AvatarImage src={defaultImage} />
      <AvatarFallback>TS</AvatarFallback>
    </Avatar>
  ),
};

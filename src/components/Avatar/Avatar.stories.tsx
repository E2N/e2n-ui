import { Avatar, AvatarProps } from './Avatar';
import defaultImage from './defaultAvatar.png';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dytYKVyXYobjZXq0BDPFsK/e2n-admin.18.04.23?node-id=48%3A6173&t=tOdmpeO4QYOISGNJ-1',
    },
  },
};

export const Default = {
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    imgSrc: defaultImage,
  },
};

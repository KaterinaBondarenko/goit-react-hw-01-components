import PropTypes from 'prop-types';
import { Online, Offline, Avatar, Name, Item } from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      {isOnline ? <Online /> : <Offline />}
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

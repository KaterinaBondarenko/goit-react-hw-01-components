import PropTypes from 'prop-types';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return;
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

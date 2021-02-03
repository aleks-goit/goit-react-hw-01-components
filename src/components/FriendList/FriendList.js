import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendListItem from '../FriendListItem/FriendListItem';

const List = styled.ul`
  width: 350px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;

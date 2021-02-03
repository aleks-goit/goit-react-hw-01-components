import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(216, 224, 234, 0.75);
  margin-bottom: 10px;
  border-radius: 5px;
`;

const FriendStatus = styled.span`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.online ? '#69ff00' : '#dc2929')};
`;

const FriendAvatar = styled.img`
  margin-right: 10px;
  width: 70px;
  border-radius: 5px;
`;

const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

function FriendListItem({ avatar, name, isOnline}) {
  return (
    <ListItem>
      <FriendStatus online={isOnline} />
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
}

FriendListItem.defaultProps = {
  avatar: 'https://via.placeholder.com/70',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

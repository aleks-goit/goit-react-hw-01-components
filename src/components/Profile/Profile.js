import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;  
  padding: 30px 15px 0 15px;
  width: 350px;
  text-align: center;
  box-shadow: 0px 0px 10px 0px rgba(216, 224, 234, 0.75);
  background-color: #fff;
  border-radius: 5px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 35px;
`;

const Name = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
`;

const Tag = styled.p`
  margin-bottom: 15px;
  color: #768696;
  font-size: 16px;
`;

const Location = styled.p`
  font-size: 16px;
  color: #768696;
  margin-bottom: 30px;
`;

const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StatsItem = styled.li`
  padding: 20px 0;
  width: 116, 66px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e9f0;
  background-color: #f3f6f9;

  &:first-child {
    margin-left: -15px;
  }

  &:last-child {
    margin-right: -15px;
  }
`;

const StatsCategory = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  color: #808f9e;
`;

const StatsNumbers = styled.span`
  font-weight: 700;
`;

function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Card>
      <div>
        <Avatar src={avatar} alt="user avatar" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>
      <StatsList>
        <StatsItem>
          <StatsCategory>Followers</StatsCategory>
          <StatsNumbers>{followers}</StatsNumbers>
        </StatsItem>
        <StatsItem>
          <StatsCategory>Views</StatsCategory>
          <StatsNumbers>{views}</StatsNumbers>
        </StatsItem>
        <StatsItem>
          <StatsCategory>Likes</StatsCategory>
          <StatsNumbers>{likes}</StatsNumbers>
        </StatsItem>
      </StatsList>
    </Card>
  );
}

Profile.defaultProps = {
  avatar: 'https://via.placeholder.com/128',
  followers: 0,
  views: 0,
  likes: 0,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;

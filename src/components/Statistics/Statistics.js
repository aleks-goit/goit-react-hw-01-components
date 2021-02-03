import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import statisticalData from '../../data/statistical-data.json';

const statsQuantity = statisticalData.length;

const Section = styled.section`
  width: 350px;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0px 0px 10px 0px rgba(216, 224, 234, 0.75);
  background-color: #fff;
  border-radius: 5px;
`;

const SectionTitle = styled.h2`
  padding: 30px 0;
  color: #505559;
  font-size: 18px;
`;

const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(${statsQuantity}, 1fr);
`;

const StatsItem = styled.li`
  padding: 10px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.randomBackground};
  box-shadow: inset 0px 0px 14px -11px rgba(0,0,0,1);
`;

const StatsLabel = styled.span`
  font-size: 14px;
  padding-bottom: 5px;
`;

const StatsPercentage = styled.span`
  font-size: 18px;
`;

function Statistics({title, stats}) {
  return (
    <Section>
      {title && (
        <SectionTitle>{title}</SectionTitle>
      )}
      <StatsList>
        {stats.map(item => (
          <StatsItem key={item.id} randomBackground={`#${randomColor()}`}>
            <StatsLabel>{item.label}</StatsLabel>
            <StatsPercentage>{item.percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </Section>
  );
}

function randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Statistics;

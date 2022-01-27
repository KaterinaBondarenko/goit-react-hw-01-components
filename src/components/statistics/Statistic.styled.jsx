import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  width: 400px;
  height: 160px;
  margin-bottom: 60px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
`;
export const Title = styled.h2`
  height: 50%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  color: rgb(117, 117, 117);
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  height: 50%;
  display: flex;
  list-style: none;
`;
export const StatsListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.color};
  color: rgb(256, 256, 256);
`;
export const FileFormat = styled.span`
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  font-size: 1.2em;
`;

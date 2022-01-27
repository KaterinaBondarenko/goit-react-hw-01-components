import PropTypes from 'prop-types';
import { getRandomRgbColor } from '../../utils/getRandomRgbColor';
import {
  StatisticsContainer,
  Title,
  StatsList,
  StatsListItem,
  FileFormat,
  Percentage,
} from './Statistic.styled';

export default function Statistic({ title, stats }) {
  return (
    <StatisticsContainer>
      {title && <Title>{title.toUpperCase()}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsListItem key={id} color={getRandomRgbColor()}>
              <FileFormat>{label}</FileFormat>
              <Percentage>{percentage}%</Percentage>
            </StatsListItem>
          );
        })}
      </StatsList>
    </StatisticsContainer>
  );
}

Statistic.propTypes = {
  stats: PropTypes.array.isRequired,
};

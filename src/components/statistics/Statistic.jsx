import PropTypes from 'prop-types';
import { getRandomRgbColor } from '../../utils/getRandomRgbColor';

export default function Statistic({ title, stats }) {
  return (
    <div>
      {title && <h2>{title.toUpperCase()}</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} color={getRandomRgbColor()}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Statistic.propTypes = {
  stats: PropTypes.array.isRequired,
};

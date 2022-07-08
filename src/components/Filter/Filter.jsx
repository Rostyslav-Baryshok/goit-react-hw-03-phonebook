import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ title, value, onChange }) => {
  return (
    <Label>
      <span>{title}</span>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

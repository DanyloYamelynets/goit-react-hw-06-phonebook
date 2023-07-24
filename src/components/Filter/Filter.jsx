import PropTypes from 'prop-types';
import { FilterSection, FilterInput, FilterTitle } from './Filterstyled';

const Filter = ({ title, filter, onFilter }) => {
  const handleInputChange = e => {
    onFilter(e.target.value);
  };
  return (
    <FilterSection>
      <FilterTitle>{title}</FilterTitle>
      <FilterInput
        onChange={handleInputChange}
        value={filter}
        type="text"
        name="filter"
      />
    </FilterSection>
  );
};
export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

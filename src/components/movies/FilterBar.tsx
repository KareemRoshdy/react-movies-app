import FilterDropdowns from "./FilterDropdowns";
import FilterRadios from "./FilterRadios";

const FilterBar = () => {
  return (
    <div className="filter-bar flex align-center space-between">
      <FilterDropdowns />
      <FilterRadios />
    </div>
  );
};

export default FilterBar;

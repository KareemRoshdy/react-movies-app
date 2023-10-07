const FilterDropdowns = () => {
  return (
    <div className="filter-dropdowns flex align-center gap-20">
      <select name="category" className="filter-category">
        <option value="all">all category</option>
        <option value="action">action</option>
        <option value="adventure">adventure</option>
        <option value="animation">animation</option>
        <option value="biography">biography</option>
      </select>

      <select name="year" className="filter-year">
        <option value="all">all the years</option>
        <option value="2023">2023</option>
        <option value="2022-2021">2022-2021</option>
        <option value="2020-2019">2020-2019</option>
        <option value="2000-2009">2000-2009</option>
        <option value="1980-1999">1980-1999</option>
      </select>
    </div>
  );
};

export default FilterDropdowns;

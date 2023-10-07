const FilterRadios = () => {
  return (
    <div className="filter-radios">
      <input type="radio" name="grade" id="featured" />
      <label htmlFor="featured">Featured</label>

      <input type="radio" name="grade" id="popular" />
      <label htmlFor="popular">Popular</label>

      <input type="radio" name="grade" id="newest" />
      <label htmlFor="newest">Newest</label>
      <div className="checked-radios-bg"></div>
    </div>
  );
};

export default FilterRadios;

import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import MoviesCards from "./MoviesCards";
import "./movies.css";

const Movies = () => {
  return (
    <section className="movies" id="home">
      <div className="movies-container">
        <FilterBar />
        <MoviesCards />
        <Link to={"/movies"}>
          <button className="see-more">see more</button>
        </Link>
      </div>
    </section>
  );
};

export default Movies;

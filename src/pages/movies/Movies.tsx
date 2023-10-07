/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./moviesPage.css";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/movies/MovieCard";
import { getMoviesPage } from "../../redux/moviesSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: any) => state.movies);

  const [pageNum, setPageNum] = useState(1);

  const paginationHandler = (number: number) => {
    window.scrollTo(0, 0);
    setPageNum(number);
  };

  useEffect(() => {
    dispatch(getMoviesPage(pageNum));
  }, [dispatch, pageNum]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="movies-page">
      <div className="movies-cards">
        {movies?.map((m: any) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            category={m.genre_ids}
            image={m.poster_path}
            year={m.release_date}
            rating={m.vote_average}
          />
        ))}
      </div>

      <div className="pagination">
        <div className="pagination-container flex align-center">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`${num === pageNum && "active"}`}
              onClick={() => paginationHandler(num)}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movies;

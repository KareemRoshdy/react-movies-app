/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesCards = () => {
  const { movies } = useSelector((state: any) => state.movies);

  return (
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
  );
};

export default MoviesCards;

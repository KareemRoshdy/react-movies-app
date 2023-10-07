/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsStarFill, BsCalendarFill, BsEyeFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../redux/moviesSlice";

interface Props {
  id: any;
}

const DetailsContainer = ({ id }: Props) => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: any) => state.movies);
  const [movie, setMovie] = useState({
    title: "",
    vote_average: 0,
    release_date: "",
    popularity: 0,
    image: "",
    poster_path: "",
    overview: "",
  });

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    movies?.map((m: any) => {
      if (m.id === +id) {
        setMovie(m);
      }
    });
  }, [id, movies]);

  return (
    <div className="movie-details-container">
      <div className="details-head">
        <h2 className="movie-title">{movie?.title}</h2>

        <div className="movie-details-info flex align-center gap-15">
          <div className="rating flex gap-10">
            <BsStarFill />
            <span className="rating-number">{movie.vote_average}</span>
          </div>
          <span>|</span>
          <div className="year flex gap-10">
            <BsCalendarFill />
            <span className="year-number">{movie.release_date}</span>
          </div>
          <span>|</span>
          <div className="view flex gap-10">
            <BsEyeFill />
            <span className="view-number">{movie.popularity}</span>
          </div>
        </div>
      </div>

      <img
        className="movie-details-image"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="movie"
      />

      <p className="description">{movie.overview}</p>
    </div>
  );
};

export default DetailsContainer;

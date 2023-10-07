/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsBookmarkFill, BsStarFill, BsPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategory } from "../../redux/moviesSlice";
import { useEffect } from "react";

interface Props {
  id: number;
  image: string;
  title: string;
  category?: [];
  year: string;
  rating: number;
}

const MovieCard = ({ id, image, title, category, year, rating }: Props) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: any) => state.movies);

  const c: any[] = [];

  categories?.map((x: any) => {
    category?.map((m) => {
      if (m === x.id) {
        c.push(x.name);
      }
    });
  });

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <Link to={`/movie-details/${id}`} className="movie-card">
      <div className="card-head">
        <img
          src={image && `https://image.tmdb.org/t/p/w500/${image}`}
          alt={title}
        />

        <div className="card-overlay">
          <div className="bookmark">
            <BsBookmarkFill />
          </div>

          <div className="rating flex align-center gap-5">
            <BsStarFill />
            <span className="rating-number">{rating}</span>
          </div>

          <div className="play">
            <BsPlayFill />
          </div>
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-info flex align-center gap-10">
          <span className="category">{c[0]}</span>
          <span className="year">{year}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

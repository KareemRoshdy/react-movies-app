/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/movies/MovieCard";
import "./movieDetails.css";
import DetailsContainer from "../../components/movie-details/DetailsContainer";
import Comments from "../../components/movie-details/Comments";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/moviesSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movies, categories } = useSelector((state: any) => state.movies);
  const [category, setCategory] = useState([]);

  const c: any[] = [];

  categories?.map((x: any) => {
    category?.map((m: any) => {
      if (m === x.id) {
        c.push(x.name);
      }
    });
  });

  useEffect(() => {
    dispatch(getCategory());

    movies?.map((m: any) => {
      setCategory(m.genre_ids);
    });
  }, [dispatch]);

  // const movies = [
  //   {
  //     id: 2,
  //     title: "The Matrix Resurrections",
  //     image: "/images/movies/matrix.jpg",
  //     category: ["Sci-fi/Action"],
  //     year: 2017,
  //     rating: "6.4",
  //   },
  //   {
  //     id: 3,
  //     title: "Spider-Man: Home coning",
  //     image: "/images/movies/spider-man.jpg",
  //     category: ["Action/Adventure"],
  //     year: 2017,
  //     rating: "6.4",
  //   },
  //   {
  //     id: 4,
  //     title: "Eternals",
  //     image: "/images/movies/movie1.jpg",
  //     category: ["Action/Adventure"],
  //     year: 2021,
  //     rating: "6.4",
  //   },
  //   {
  //     id: 5,
  //     title: "Dune",
  //     image: "/images/movies/movie2.jpg",
  //     category: ["Adventure/Sci-fi"],
  //     year: 2021,
  //     rating: "6.4",
  //   },
  //   {
  //     id: 6,
  //     title: "1912",
  //     image: "/images/movies/movie3.jpg",
  //     category: ["War/Drama"],
  //     year: 2019,
  //     rating: "6.4",
  //   },
  // ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="movie-details">
      <>
        <DetailsContainer id={id} />

        <div className="movies-cards">
          {movies?.slice(15, 20).map((m: any) => (
            <MovieCard
              key={m.id}
              id={m.id}
              title={m.title}
              category={m.genre_ids}
              image={m?.poster_path}
              year={m.release_date}
              rating={m.vote_average}
            />
          ))}
        </div>

        <Comments />
      </>
    </section>
  );
};

export default MovieDetails;

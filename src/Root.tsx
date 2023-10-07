/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "./redux/moviesSlice";
import Loader from "./components/loader/Loader";

const Root = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: any) => state.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const [goUp, setGoUp] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 100 ? setGoUp(true) : setGoUp(false);
    });
  });

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <div className={`go-up ${goUp && "active"}`} onClick={goTop}>
        <BsFillArrowUpCircleFill />
      </div>

      <Header />
      {movies.length <= 0 ? (
        <Loader />
      ) : (
        <>
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Root;

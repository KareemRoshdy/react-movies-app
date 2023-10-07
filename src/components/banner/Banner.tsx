import { Link } from "react-router-dom";
import "./banner.css";
import { BsFilm, BsCalendarFill, BsClockFill } from "react-icons/bs";

const Banner = () => {
  return (
    <Link to={`/movies`}>
      <section className="banner">
        <div className="banner-container">
          <img
            className="banner-image"
            src="./images/John-Wick-3.jpg"
            alt="bannerImage"
          />

          <div className="banner-content">
            <div className="banner-content-info flex align-center gap-20">
              <div className="type flex align-center gap-5">
                <BsFilm />
                <p>Action/Thriller</p>
              </div>

              <div className="year flex align-center gap-5">
                <BsCalendarFill />
                <p>2019</p>
              </div>

              <div className="duration flex align-center gap-5">
                <BsClockFill />
                <p>2h 11m</p>
              </div>

              <div className="quality">
                <p>4K</p>
              </div>
            </div>

            <h2 className="banner-title">John Wick: Chapter 3 - Parabellum</h2>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Banner;

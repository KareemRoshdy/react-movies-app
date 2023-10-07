import { useEffect, useState } from "react";
import { BsSearch, BsXLg } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useDispatch } from "react-redux";
import { getMovieSearch } from "../../redux/moviesSlice";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeHandler = () => {
    setActive((pre) => !pre);
  };
  const openHandler = () => {
    setOpen((pre) => !pre);
  };

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setActive(false);
      setOpen(false);
      setSearch("");
    });
  }, []);

  const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    dispatch(getMovieSearch(search));
    navigate("/movies");
  };

  return (
    <header className={`header ${open && "open"}`}>
      <div
        className={`navbar flex align-center space-between ${
          active && "active"
        } ${open && "open"}`}
      >
        <div className="logo flex align-center gap-10">
          <div
            className={`menu-icon ${active && "active"}`}
            onClick={activeHandler}
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
          <Link to={`/`}>
            <h2>
              Movies<span>App</span>
            </h2>
          </Link>
        </div>

        <nav className={`${active && "active"}`}>
          <ul className="nav-links flex align-center">
            <li className="nav-link">
              <a href="#home" onClick={goHome}>
                home
              </a>
            </li>
            <li className="nav-link">
              <a href="#category" onClick={goHome}>
                category
              </a>
            </li>
            <li className="nav-link live">
              <a href="#live" onClick={goHome}>
                live
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions flex align-center gap-25">
          <span
            className={`search-icon ${open && "open"}`}
            onClick={openHandler}
          >
            {open ? <BsXLg /> : <BsSearch />}
          </span>

          <form
            onSubmit={(e) => e.preventDefault()}
            className={`search-form flex align-center ${open && "open"}`}
          >
            <input
              type="search"
              name="search"
              id="search"
              placeholder="i'm looking for..."
              className="search-input"
              value={search}
              onChange={searchHandler}
            />
            <BsSearch />
          </form>

          <a href="#" className="sign-in flex align-center gap-5">
            <span>sign in</span>
            <BiLogIn />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterBrand = () => {
  return (
    <div className="footer-brand">
      <Link to={`/`}>
        <h2 className="logo">
          Movies<span>App</span>
        </h2>
      </Link>
      <p className="slogan">
        Movies & Tv Shows Online Cinema, Movie App using React.js.
      </p>
      <div className="social-links flex align-center gap-25">
        <a href="#">
          <BsFacebook />
        </a>
        <a href="#">
          <BsTwitter />
        </a>
        <a href="#">
          <BsInstagram />
        </a>
        <a href="#">
          <FaTiktok />
        </a>
        <a href="#">
          <BsYoutube />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;

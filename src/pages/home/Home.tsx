/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import Live from "../../components/live/Live";
import Movies from "../../components/movies/Movies";

const Home = () => {
  return (
    <div className="home-page">
      <main>
        <Banner />
        <Movies />
        <Category />
        <Live />
      </main>
    </div>
  );
};

export default Home;

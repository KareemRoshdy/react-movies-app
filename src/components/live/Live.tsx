import Heading from "../heading/Heading";
import LiveCard from "./LiveCard";
import "./live.css";

const Live = () => {
  const lives = [
    {
      id: 1,
      title: `planet earth || season 1- islands`,
      viewers: "305K",
      image: "./images/planet.jpg",
      badge: "./images/bbcamerica.jpg",
    },
    {
      id: 2,
      title: `Game of Thrones Season 5 - Mother's Mercy`,
      viewers: "1.5M",
      image: "./images/got.jpg",
      badge: "./images/HBO-Logo-square.jpg",
    },
    {
      id: 3,
      title: `Vikings Season 4 - What Might Have Been`,
      viewers: "1.5M",
      image: "./images/vikins.jpg",
      badge: "./images/HBO-Logo-square.jpg",
    },
  ];

  return (
    <section className="live-section" id="live">
      <Heading title="live tv shows" />
      <div className="live-cards">
        {lives.map((l) => (
          <LiveCard
            key={l.id}
            title={l.title}
            image={l.image}
            badge={l.badge}
            viewers={l.viewers}
          />
        ))}
      </div>
    </section>
  );
};

export default Live;

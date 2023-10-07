/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "../heading/Heading";
import CategoryCard from "./CategoryCard";
import "./category.css";

const Category = () => {
  const categories = [
    {
      id: 1,
      image: "./images/action.jpg",
      name: "action",
      total: 100,
    },
    {
      id: 2,
      image: "./images/comedy.jpg",
      name: "comedy",
      total: 50,
    },
    {
      id: 3,
      image: "./images/thriller.webp",
      name: "thriller",
      total: 80,
    },
    {
      id: 4,
      image: "./images/adventure.jpg",
      name: "adventure",
      total: 100,
    },
    {
      id: 5,
      image: "./images/animated.jpg",
      name: "animated",
      total: 50,
    },
    {
      id: 6,
      image: "./images/crime.jpg",
      name: "crime",
      total: 20,
    },
    {
      id: 7,
      image: "./images/sci-fi.jpg",
      name: "sci-fi",
      total: 80,
    },
    {
      id: 8,
      image: "./images/horror.jpg",
      name: "horror",
      total: 80,
    },
  ];

  return (
    <section className="category" id="category">
      <Heading title="Category" />

      <div className="category-cards">
        {categories.map((m) => (
          <CategoryCard
            key={m.id}
            image={m.image}
            name={m.name}
            total={m.total}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;

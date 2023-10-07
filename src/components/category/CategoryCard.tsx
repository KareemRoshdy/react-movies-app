import { Link } from "react-router-dom";

interface Props {
  image: string;
  name: string;
  total: number;
}

const CategoryCard = ({ image, name, total }: Props) => {
  return (
    <Link to={`/movies`} className="category-card">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="total">{total}</p>
    </Link>
  );
};

export default CategoryCard;

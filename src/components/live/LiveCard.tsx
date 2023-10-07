import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  image: string;
  viewers: string;
  badge: string;
}
const LiveCard = ({ title, image, badge, viewers }: Props) => {
  return (
    <Link to={`/movies`} className="live-card">
      <div className="card-head">
        <img src={image} alt="image" />
        <div className="live-badge">LIVE</div>
        <div className="total-viewers">{viewers} Viewers</div>
        <div className="play">
          <BsFillPlayFill />
        </div>
      </div>

      <div className="live-body flex align-center gap-15">
        <img src={badge} className="avatar" alt={title} />
        <h3 className="card-title">{title}</h3>
      </div>
    </Link>
  );
};

export default LiveCard;

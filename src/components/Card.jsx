import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/card.scss";

function Card({ locations }) {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      {locations.map((location) => (
        <div
          className="card"
          key={location.id}
          onClick={() => navigate(`/fiche-logement/${location.id}`)}
        >
          <div>
            <img src={location.pictures[0]} alt={location.title} />
          </div>
          <div className="overlay"></div>
          <div className="text">
            <h2>{location.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { Card };

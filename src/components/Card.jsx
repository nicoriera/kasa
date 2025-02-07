import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.scss";

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
          <img src={location.pictures[0]} alt={location.title} />

          <div className="card-text">
            <p>{location.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export { Card };

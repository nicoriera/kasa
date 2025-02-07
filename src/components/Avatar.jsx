import "./Avatar.scss";
import PropTypes from "prop-types";

function Avatar({ picture }) {
  return <img className="avatar" src={picture} alt="avatar" />;
}

Avatar.propTypes = {
  picture: PropTypes.string.isRequired,
};

export { Avatar };

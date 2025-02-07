import "./Banner.scss";
import PropTypes from "prop-types";

function Banner({ backgroundImage, text }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <p className="banner-text">{text}</p>
    </div>
  );
}

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export { Banner };

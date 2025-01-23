import "../styles/tag.scss";
import PropTypes from "prop-types";

function Tag({ tag }) {
  return (
    <div className="tag-container">
      {tag.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export { Tag };

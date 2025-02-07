import "./Tag.scss";
import PropTypes from "prop-types";

function Tag({ tags }) {
  return (
    <div className="tag-container">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Tag };

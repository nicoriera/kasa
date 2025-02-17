import "./Dropdown.scss";
import arrow from "../assets/arrow_back.svg";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeClass, setSizeClass] = useState("small");

  useEffect(() => {
    const updateSizeClass = () => {
      if (window.innerWidth >= 1024) {
        setSizeClass("large");
      } else if (window.innerWidth >= 768) {
        setSizeClass("medium");
      } else {
        setSizeClass("small");
      }
    };

    updateSizeClass(); // Set initial size class
    window.addEventListener("resize", updateSizeClass);

    return () => window.removeEventListener("resize", updateSizeClass);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div className={`dropdown ${sizeClass}`}>
      <div
        className={`dropdown-header  ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <p>{title}</p>
        <img src={arrow} alt="arrow" className={isOpen ? "open" : ""} />
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {renderContent()}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  size: PropTypes.string.isRequired,
};

export { Dropdown };

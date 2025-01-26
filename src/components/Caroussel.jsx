import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/caroussel.scss";
import arrow from "../assets/arrow_back.svg";

function Caroussel({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextPicture = async () => {
    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (currentPicture < pictures.length - 1) {
      setCurrentPicture(currentPicture + 1);
    } else {
      setCurrentPicture(0);
    }
    setIsAnimating(false);
  };

  const handlePreviousPicture = async () => {
    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (currentPicture > 0) {
      setCurrentPicture(currentPicture - 1);
    } else {
      setCurrentPicture(pictures.length - 1);
    }
    setIsAnimating(false);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        handlePreviousPicture();
        break;
      case "ArrowRight":
        handleNextPicture();
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="caroussel"
      role="region"
      aria-label="Galerie de photos du logement"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      {pictures.length > 1 && (
        <button
          className="caroussel-button previous"
          onClick={handlePreviousPicture}
          aria-label="Photo précédente"
          type="button"
        >
          <img src={arrow} alt="" />
        </button>
      )}

      <img
        className={`caroussel-image ${isAnimating ? "fade" : ""}`}
        src={pictures[currentPicture]}
        key={pictures[currentPicture]}
        alt={`Photo ${currentPicture + 1} sur ${pictures.length}`}
        onError={(e) => {
          console.error("Erreur de chargement de l'image:", e);
          // Optionnel : afficher une image par défaut en cas d'erreur
          // e.target.src = "/chemin/vers/image/par-defaut.jpg";
        }}
      />

      {pictures.length > 1 && (
        <button
          className="caroussel-button next"
          onClick={handleNextPicture}
          aria-label="Photo suivante"
          type="button"
        >
          <img src={arrow} alt="" />
        </button>
      )}

      {pictures.length > 1 && (
        <div className="caroussel-counter">
          {currentPicture + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}

Caroussel.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export { Caroussel };

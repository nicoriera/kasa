import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { locationService } from "../api/location";
import { Caroussel } from "../components/Caroussel";
import { Dropdown } from "../components/Dropdown";
import { Tag } from "../components/Tag";
import { Avatar } from "../components/Avatar";
import { Rating } from "../components/Rating";
import "../styles/logement.scss";
const size = {
  large: "large",
  medium: "medium",
  small: "small",
};

function Logement() {
  const [logement, setLogement] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await locationService.fetchLocationById(id);
        setLogement(data);
        // Utiliser directement les URLs des images du JSON
        setPictures(data.pictures); // On utilise directement les URLs sans transformation
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue: {error.message}</div>;
  }

  return (
    <div className="logement">
      {logement && (
        <div key={logement.id} className="logement-container">
          <Caroussel pictures={pictures} />

          <div className="logement-title-host-container">
            <div className="logement-title-container">
              <h1 className="logement-title">{logement.title}</h1>
              <p className="logement-location">{logement.location}</p>
            </div>
            <div className="logement-host">
              <p>{logement.host.name}</p>
              <Avatar picture={logement.host.picture} />
            </div>
          </div>

          <div className="logement-tags-rating">
            <Tag tag={logement.tags} />
            <Rating rating={logement.rating} />
          </div>

          <div className="logement-equipments">
            <div className="dropdown-container horizontal">
              <Dropdown
                title="Description"
                content={logement.description}
                size={size.large}
              />
              <Dropdown
                title="Équipements"
                content={logement.equipments}
                size={size.large}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Logement };

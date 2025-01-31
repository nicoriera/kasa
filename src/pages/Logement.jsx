import { useParams, useNavigate } from "react-router-dom";
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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await locationService.fetchLocationById(id);
        if (!data) {
          navigate("/*");
          return;
        }
        setLogement(data);
        setPictures(data.pictures);
      } catch {
        navigate("/*");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
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

            <div className="logement-tags-rating mobile">
              <Tag tags={logement.tags} />
            </div>

            <div className="logement-rating-host-container-right">
              <div className="logement-host">
                <Rating
                  rating={
                    Number.isNaN(parseInt(logement.rating, 10))
                      ? 0
                      : parseInt(logement.rating, 10)
                  }
                />
                <div className="logement-host-name">
                  <p>{logement.host.name.split(" ")[0]}</p>
                  <p>{logement.host.name.split(" ")[1]}</p>
                </div>
                <Avatar picture={logement.host.picture} />
              </div>
            </div>
          </div>

          <div className="logement-tags-rating desktop">
            <Tag tags={logement.tags} />
            <Rating
              rating={
                Number.isNaN(parseInt(logement.rating, 10))
                  ? 0
                  : parseInt(logement.rating, 10)
              }
            />
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

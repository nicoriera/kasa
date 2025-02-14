import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { locationService } from "../api/location";
import { Caroussel } from "../components/Caroussel";
import { Dropdown } from "../components/Dropdown";
import { Tag } from "../components/Tag";
import { Avatar } from "../components/Avatar";
import { Rating } from "../components/Rating";
import "./Logement.scss";

function Logement() {
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await locationService.fetchLocationById(id);
        if (!data) {
          navigate("/404");
          return;
        }
        setLogement(data);
      } catch (error) {
        console.error("Erreur lors du chargement du logement:", error);
        navigate("/404");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  const parseRating = (rating) => {
    const parsedRating = parseInt(rating, 10);
    return Number.isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5
      ? 0
      : parsedRating;
  };

  if (isLoading) {
    return <div className="loading">Chargement en cours...</div>;
  }

  if (!logement) {
    return null;
  }

  const {
    title,
    location,
    tags,
    rating,
    host,
    description,
    equipments,
    pictures,
  } = logement;
  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="logement">
      <div className="logement-container">
        <Caroussel pictures={pictures} />

        <div className="logement-title-host-container">
          <div className="logement-title-container">
            <h1 className="logement-title">{title}</h1>
            <p className="logement-location">{location}</p>
          </div>

          <div className="logement-tags-rating mobile">
            <Tag tags={tags} />
          </div>

          <div className="logement-rating-host-container-right">
            <div className="logement-host">
              <div className="logement-host-container">
                <div className="logement-host-name">
                  <p>{firstName}</p>
                  <p>{lastName}</p>
                </div>
                <Avatar picture={host.picture} />
              </div>
            </div>
            <div className="rating mobile">
              <Rating rating={parseRating(rating)} />
            </div>
          </div>
        </div>

        <div className="logement-tags-rating desktop">
          <Tag tags={tags} />
          <div className="rating">
            <Rating rating={parseRating(rating)} />
          </div>
        </div>

        <div className="logement-equipments">
          <div className="dropdown-container horizontal">
            <Dropdown title="Description" content={description} size="large" />
            <Dropdown title="Équipements" content={equipments} size="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Logement };

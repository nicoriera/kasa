import { Card } from "../components/Card";
import { Banner } from "../components/Banner";
import { useEffect, useState } from "react";
import { locationService } from "../api/location";
import bannerImage from "../assets/banner-image-home.png";
import "../styles/home.scss";

function Home() {
  const [locations, setLocations] = useState([]);

  const text = "Chez vous, partout et ailleurs";

  useEffect(() => {
    const fetchData = async () => {
      const data = await locationService.fetchLocations();
      setLocations(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="home">
        <Banner backgroundImage={bannerImage} text={text} />
        <Card locations={locations} />
      </div>
    </>
  );
}

export { Home };

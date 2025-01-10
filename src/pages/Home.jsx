import { Card } from "../components/Card";
import { Banner } from "../components/Banner";
import { useEffect, useState } from "react";
import { locationService } from "../api/location";
import "../styles/home.scss";

function Home() {
  const [locations, setLocations] = useState([]);

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
        <Banner />
        <Card locations={locations} />
      </div>
    </>
  );
}

export { Home };

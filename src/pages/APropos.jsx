import { Dropdown } from "../components/Dropdown";
import { Banner } from "../components/Banner";
import bannerImage from "../assets/banner-image-a-propos.jpeg";

function APropos() {
  const size = {
    large: "large",
    medium: "medium",
    small: "small",
  };

  return (
    <div className="a-propos">
      <Banner backgroundImage={bannerImage} />
      <div className="dropdown-container vertical">
        <Dropdown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          size={size.large}
        />
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          size={size.large}
        />
        <Dropdown
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          size={size.large}
        />
        <Dropdown
          title="Sécurité"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          size={size.large}
        />
      </div>
    </div>
  );
}

export { APropos };

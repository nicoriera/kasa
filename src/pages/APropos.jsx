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
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          size={size.large}
        />
        <Dropdown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés."
          size={size.large}
        />
      </div>
    </div>
  );
}

export { APropos };

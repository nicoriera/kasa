import logoWhite from "../assets/logo_white.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img src={logoWhite} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export { Footer };

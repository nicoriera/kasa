import PropTypes from "prop-types";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/layout_default.scss";

function LayoutDefault({ children }) {
  return (
    <>
      <div className="layout-default">
        <Header />
        <div className="layout-default-content">{children}</div>
        <Footer />
      </div>
    </>
  );
}

LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LayoutDefault };

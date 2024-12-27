import PropTypes from "prop-types";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function LayoutDefault({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LayoutDefault };

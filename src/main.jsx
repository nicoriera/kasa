import { createRoot } from "react-dom/client";
import { Router } from "./routes/index";
import "./styles/index.scss";

const root = createRoot(document.getElementById("root"));

root.render(<Router />);

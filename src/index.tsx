import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);

import { StrictMode } from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

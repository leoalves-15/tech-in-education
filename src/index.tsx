import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dinamic from "./pages/Dinamic";
import Learn from "./pages/Learn";
import Teachers from "./pages/Teachers";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container, Contain } from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/dinamica",
    element: <Dinamic />,
  },
  {
    path: "/aprenda",
    element: <Learn />,
  },
  {
    path: "/professores",
    element: <Teachers />,
  },
]);

root.render(
  <React.StrictMode>
    <Container>
      <Contain>
        <RouterProvider router={router} />
      </Contain>
    </Container>
  </React.StrictMode>
);

reportWebVitals();

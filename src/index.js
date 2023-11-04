import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { StateContextProvider } from './Context/index'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateContextProvider>
);

root.render(
  <React.StrictMode> {/* Wrap your entire application with <React.StrictMode> */}
        <App />
  </React.StrictMode>
);

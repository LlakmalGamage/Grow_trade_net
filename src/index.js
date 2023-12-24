import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from './Context/index'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </StateContextProvider>
);
// root.render(   
//         <App />        
// );

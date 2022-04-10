import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlaylistProvider, DataProvider } from "./frontend/context/";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <PlaylistProvider>
          <App />
        </PlaylistProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

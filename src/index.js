import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import { firebase } from "./lib/firebase.prod";
import FirebaseContext from "./context/firebaseContext/firebaseContext";

import "./index.css";

import App from "./App";

const app = (
  <FirebaseContext.Provider value={firebase}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>
);

ReactDOM.render(app, document.getElementById("root"));

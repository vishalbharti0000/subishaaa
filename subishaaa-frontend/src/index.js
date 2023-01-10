import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { SettingsProvider } from "./contexts/SettingsContext";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <SettingsProvider>
      <Router>
        <App />
      </Router>
    </SettingsProvider>
  </Provider>
);
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./navigation/Navigation.jsx";
import store from "./Redux/store/Store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

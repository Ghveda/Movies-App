import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Router from "Router";
import { BrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import { Provider } from "react-redux";
import { store } from "store/store";
import DeleteModal from "components/DeleteModal/DeleteModal.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout />
        <DeleteModal />
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

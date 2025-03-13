import React from "react";
import ReactDom from "react-dom/client"
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
    <>
    <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
    <App/>
    </>
);
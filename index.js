import React from "react";
import ReactDom from "react-dom/client"
import App from "./App";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { persistor, store } from "./src/Redux/store";
import { PersistGate } from "redux-persist/integration/react";


const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
    <>
    <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
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
    </PersistGate>
    </Provider>
    </React.StrictMode>
    </>
);
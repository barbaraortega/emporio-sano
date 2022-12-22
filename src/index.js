import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CartContextProvider } from "./context/cartContext";

import { initializeApp } from "firebase/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyDq_l8yq8sRWWq_AyoNpS4tRLgVAbicqgI",
  authDomain: "emporio-sano.firebaseapp.com",
  projectId: "emporio-sano",
  storageBucket: "emporio-sano.appspot.com",
  messagingSenderId: "301688587393",
  appId: "1:301688587393:web:d5e2be83a16f2fbe8b7980"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

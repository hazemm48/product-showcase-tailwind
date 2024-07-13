import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./contexts/cart-context.jsx";
import { AlertProvider } from "./contexts/alert-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </CartProvider>
  </React.StrictMode>,
);

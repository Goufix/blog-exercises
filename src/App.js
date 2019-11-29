import React from "react";
import { Router } from "@reach/router";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { GlobalStyle } from "./styles/styles";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Login path="/" />
        <Register path="/register" />
      </Router>
    </>
  );
}

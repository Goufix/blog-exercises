import React from "react";
import { Router } from "@reach/router";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { GlobalStyle } from "./styles/styles";
import { Post } from "./components/Post";
import { Home } from "./components/Home";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <Post path="/post" />
      </Router>
    </>
  );
}

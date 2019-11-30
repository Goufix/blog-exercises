import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "@reach/router";
import * as S from "./styles";

export function Home() {
  return (
    <>
      <Container>
        <S.Div>
          <h1>Bem vindo ao meu blog!</h1>
        </S.Div>
        <S.Div>
          <Link className="center" variant="primary" to="/login">
            <Button type="button" variant="outline-primary">
              Login
            </Button>
          </Link>
          <Link className="center" variant="primary" to="/Post">
            <Button type="button" variant="outline-primary">
              Exemplo Post
            </Button>
          </Link>
          <Link className="center" variant="primary" to="/register">
            <Button type="button" variant="outline-primary">
              Registro
            </Button>
          </Link>
        </S.Div>
      </Container>
    </>
  );
}

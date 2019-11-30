import React, { useState } from "react";
import { Link } from "@reach/router";

import Logo from "../../assets/logo.png";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import * as S from "./styles";

export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(data) {
    props.onSubmit(data);
  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <Card>
              <Card.Body className="pt-3">
                <S.Div>
                  <Link to="/">
                    <img src={Logo} alt="" width="50px" height="50px" />
                  </Link>
                </S.Div>
                <h4>Login</h4>
                <Form autoComplete="off">
                  <Form.Group controlId="email">
                    <Form.Control
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="text"
                      placeholder="Email"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      placeholder="Senha"
                    ></Form.Control>
                  </Form.Group>
                  <S.ButtonGroup>
                    <Button onClick={handleSubmit}>Entrar</Button>
                    <Link to="/register" variant="primary">
                      Criar conta
                    </Link>
                  </S.ButtonGroup>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

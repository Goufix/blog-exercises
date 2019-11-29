import React, { useState } from "react";

import Logo from "../../assets/logo.png";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import * as S from "./styles";
import { Link } from "@reach/router";

export function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    const data = { name, email, password };
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
                  <img src={Logo} alt="" width="50px" height="50px" />
                </S.Div>
                <h4>Criar uma conta</h4>
                <Form autoComplete="off">
                  <Form.Group controlId="name">
                    <Form.Control
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type="text"
                      placeholder="Nome"
                    />
                  </Form.Group>
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
                    <Button onClick={handleSubmit}>Criar conta</Button>
                    <Link to="/" variant="button primary">
                      Entrar
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

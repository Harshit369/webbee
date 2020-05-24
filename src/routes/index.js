import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Config from "./config";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const RoutesWrapper = styled.div``;

class Routes extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Objector</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/link">All</Nav.Link>
              <Nav.Link href="/config">Manage types</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <RoutesWrapper>
          <Switch>
            <Route key="config" path="/config" component={Config} />
          </Switch>
        </RoutesWrapper>
      </Wrapper>
    );
  }
}

export default Routes;

import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { actions } from "../../store/config";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100%;
  width: 100%;
  overflow: auto;
  > * {
    width: 320px;
  }
`;

class Config extends Component {
  render() {
    const { types = [], addType } = this.props;

    return (
      <Wrapper>
        {types.map(() => {
          return (
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>Featured</Card.Body>
            </Card>
          );
        })}
        <Button variant="secondary" onClick={addType}>
          Add Type
        </Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return state.config;
};

const mapDispatchToProps = {
  addType: actions.addType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Config);

import React, { Component } from "react";
import styled from "styled-components";

const HealthCardBox = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1);
  }
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export class HealthCard extends Component {
  render() {
    return (
      <HealthCardBox>
        <div />
      </HealthCardBox>
    );
  }
}

export default HealthCard;

import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.div`
  font-family: Avenir;
  font-size: 45px;
  font-weight: 600;
  letter-spacing: 5.9px;
  text-align: center;
  color: #5aa3ff;
  text-decoration: none;
`;

export class Join extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <Logo>POCAT</Logo>
        </Link>
      </div>
    );
  }
}

export default Join;

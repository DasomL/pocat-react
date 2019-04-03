import React, { Component } from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  width: 100%;
  height: 58px;
  border: solid 1px #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-family: Avenir;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #5aa3ff;
`;

export class Header extends Component {
  render() {
    return (
      <>
        <HeaderBox>
          <Logo>POCAT</Logo>
        </HeaderBox>
      </>
    );
  }
}

export default Header;

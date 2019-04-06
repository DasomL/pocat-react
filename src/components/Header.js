import React, { Component } from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  max-width: 1024px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const BlankBox = styled.div`
  width: 90px;
  height: 60px;
`;

const Logo = styled.div`
  font-family: Avenir;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #5aa3ff;
`;

const LoginBox = styled.div`
  width: 90px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  width: 60px;
  height: 28px;
  border-radius: 5px;
  border: 0px solid #ffffff;
  background-color: #5aa3ff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-align: center;
  color: #ffffff;
`;

export class Header extends Component {
  render() {
    return (
      <>
        <HeaderBox>
          <BlankBox />
          <Logo>POCAT</Logo>
          <LoginBox>
            <LoginButton>로그인</LoginButton>
          </LoginBox>
        </HeaderBox>
      </>
    );
  }
}

export default Header;

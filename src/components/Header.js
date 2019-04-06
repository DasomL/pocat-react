import React, { Component } from "react";
import styled from "styled-components";
import UserDrop from "./UserDrop";

const HeaderBox = styled.div`
  max-width: 1024px;
  height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-family: Avenir;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #5aa3ff;
`;

const HeaderButtonBox = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  height: 28px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  margin-right: 30px;

  border: ${props =>
    props.blueBorder ? "1px solid #5aa3ff" : "0px solid #ffffff"};
  background-color: ${props => (props.blueBorder ? "#ffffff" : "#5aa3ff")};
  color: ${props => (props.blueBorder ? "#5aa3ff" : "#ffffff")};

  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-align: center;

  -webkit-appearence: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  transition: all 0.3s;
`;

const HeaderText = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.3px;
  text-align: center;
  color: #5aa3ff;
  margin-right: 30px;
`;

const User = styled.button`
  width: 30px;
  height: 30px;

  border-radius: 15px;
  border: 0px;
  background-color: #daebff;

  -webkit-appearence: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

function handleClick() {
  console.log("눌렀다");
}

export class Header extends Component {
  render() {
    return (
      <>
        <HeaderBox>
          <Logo>POCAT</Logo>

          <HeaderButtonBox>
            <Button onClick={handleClick}>로그인</Button>
            <HeaderText>나의야옹이</HeaderText>
            <User />
          </HeaderButtonBox>
        </HeaderBox>
        <UserDrop />
      </>
    );
  }
}

export default Header;

import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  position: absolute;
  width: 300px;
  height: 370px;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -150px;
`;

const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #5aa3ff;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Logo = styled.h1`
  font-family: Avenir;
  font-size: 70px;
  font-weight: 600;
  letter-spacing: 10px;
  color: #5aa3ff;
  margin-top: 0px;
  margin-bottom: 30px;
`;

const SubText = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #5aa3ff;
  margin-bottom: 44px;
`;

const ContainerButton = styled.div`
  width: 280px;
  margin: auto;
`;

const Button = styled.button`
  background-color: ${props => (props.primary ? "#5aa3ff" : "#ffffff")};
  color: ${props => (props.primary ? "#ffffff" : "#5aa3ff")};
  border: 1px solid #5aa3ff;
  transition: all 0.3s;

  min-width: 280px;
  padding: 15px;
  margin-bottom: 15px;

  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.5px;
  border-radius: 5px;

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
`;

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <SubTitle>건강한 야옹이를 위한 첫걸음</SubTitle>
          <Logo>POCAT</Logo>
          <SubText>
            포캣은 건강한 반려묘를 위한
            <br />
            건강기록 서비스입니다
          </SubText>
          <ContainerButton>
            <Button primary>로그인</Button>
            <Link to="/join">
              <Button>회원가입</Button>
            </Link>
          </ContainerButton>
        </Container>
      </>
    );
  }
}

export default App;

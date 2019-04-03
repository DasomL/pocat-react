import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  position: absolute;
  width: 400px;
  height: 370px;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
`;

const Logo = styled.div`
  font-family: Avenir;
  font-size: 45px;
  font-weight: 600;
  letter-spacing: 5.9px;
  text-align: center;
  color: #5aa3ff;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 350px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px #f5f5f5;

  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 210px;
  height: 19px;
  font-size: 16px;
  border: solid 0px #f5f5f5;
  color: #000000;
  &:active,
  &:focus {
    outline: none;
  }
  padding-right: 25px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #cacaca;
  padding-left: 25px;
`;

const SmallNotice = styled.div`
  width: 350px;
  height: 28px;
  font-size: 11px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.4px;
  text-align: center;
  color: #cacaca;
  margin-bottom: 25px;
`;

const Button = styled.button`
  width: 350px;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 5px;
  color: #ffffff;
  transition: all 0.3s;

  border: ${props =>
    props.primary ? "1px solid #5aa3ff" : "1px solid #1ec800"};
  background-color: ${props => (props.primary ? "#5aa3ff " : "#1ec800")};

  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.5px;

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

export class Join extends Component {
  status = {
    nickname: "",
    email: "",
    password: ""
  };

  render() {
    return (
      <>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>POCAT</Logo>
          </Link>
          <Form>
            <InputBox>
              <Label>닉네임</Label>
              <Input />
            </InputBox>
            <InputBox>
              <Label>이메일</Label>
              <Input />
            </InputBox>
            <InputBox>
              <Label>비밀번호</Label>
              <Input type="password" />
            </InputBox>

            <SmallNotice>
              회원가입시 이용약관, 개인정보취급방침을 읽고 이해하셨으며
              <br />
              해당 내용에 동의하신 것이 됩니다.
            </SmallNotice>
            <Link to="/joinsuccess">
              <Button primary>이메일로 가입하기</Button>
            </Link>
          </Form>
          <Button>네이버로 가입하기</Button>
        </Container>
      </>
    );
  }
}

export default Join;

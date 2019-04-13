import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  position: absolute;
  width: 360px;
  height: 500px;
  top: 50%;
  left: 50%;
  margin-top: -180px;
  margin-left: -180px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1.2px;
  text-align: center;
  color: #5aa3ff;
  margin-bottom: 18px;
`;

const Subtext = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -0.5px;
  text-align: center;
  color: #969696;
  margin-bottom: 70px;
`;

const PersonalEmail = styled.div`
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
`;

const EmailCheckNotice = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 1.36;
  letter-spacing: -0.5px;
  text-align: center;
  color: #969696;
  margin-bottom: 70px;
`;

const Button = styled.button`
  background-color: ${props => (props.primary ? "#5aa3ff" : "#ffffff")};
  color: ${props => (props.primary ? "#ffffff" : "#5aa3ff")};
  border: 1px solid #5aa3ff;
  transition: all 0.3s;

  min-width: 350px;
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

export class JoinSuccess extends Component {
  render() {
    return (
      <>
        <Container>
          <Title>가입 신청 완료</Title>
          <Subtext>
            회원가입 시 입력하신 이메일로 가입 인증 메일을 발송하였습니다.
            <br />
            인증 메일 속 인증하기 버튼을 클릭하시면 회원가입이 완료됩니다.
          </Subtext>
          <PersonalEmail>somgrapik@gmail.com</PersonalEmail>
          <EmailCheckNotice>
            소중한 개인정보를 위해 발송한 인증메일은
            <br />
            3시간 이내로 인증을 하셔야 정상적으로 가입됩니다.
          </EmailCheckNotice>
          <Link to="/login">
            <Button primary>로그인</Button>
          </Link>
          <Button>인증메일 재발송</Button>
        </Container>
      </>
    );
  }
}

export default JoinSuccess;

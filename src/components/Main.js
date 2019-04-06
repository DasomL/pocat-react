import React, { Component } from "react";
import styled from "styled-components";

const MainBox = styled.div`
  max-width: 1024px;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const TextBox = styled.div`
  min-width: 400px;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: center;
  color: #5aa3ff;
  margin-bottom: 40px;
  white-space: normal;
  word-break: keep-all;
`;

const SubText = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.5px;
  text-align: center;
  color: #5aa3ff;
  margin-bottom: 40px;
  white-space: normal;
  word-break: keep-all;
`;

const Button = styled.button`
  height: 40px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 5px;

  border: ${props =>
    props.blueBorder ? "1px solid #5aa3ff" : "0px solid #ffffff"};
  background-color: ${props => (props.blueBorder ? "#ffffff" : "#5aa3ff")};
  color: ${props => (props.blueBorder ? "#5aa3ff" : "#ffffff")};

  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.5px;
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

export class Main extends Component {
  render() {
    return (
      <>
        <MainBox>
          <TextBox>
            <Title>뚱냥이는 이제 그만!</Title>
            <SubText>
              건강한 반려묘를 위해 체중관리는 필수
              <br />
              행복한 야옹이를 위해 포캣에서 건강을 관리하세요
            </SubText>
            <Button blueBorder>더 알아보기</Button>
          </TextBox>
        </MainBox>
        <MainBox>
          <TextBox>
            <Title>고양이도 살을 빼야하나요?</Title>
            <SubText>
              귀여운 뚱냥이는 행복하지 않아요
              <br />
              비만야옹이에게 관련 질병이 찾아올 확률은 정상체중의 고양이보다
              훨씬 높아요!
              <br />
              스스로 다이어트 할 수 없는 야옹이에게 반려인의 도움은 꼭 필요해요
            </SubText>
          </TextBox>
        </MainBox>
        <MainBox>
          <TextBox>
            <Title>어떻게 관리해야할까요?</Title>
            <SubText>
              야옹이의 현재 상태를 포캣에 입력하고 정량의 사료를 급여해주세요
              <br />
              변화하는 야옹이의 몸무게를 기록하고 체중에 맞는 운동도 꾸준히
              병행한다면
              <br />
              건강한 야옹이가 될 수 있답니다
            </SubText>
            <Button>야옹이 케어하기</Button>
          </TextBox>
        </MainBox>
      </>
    );
  }
}

export default Main;

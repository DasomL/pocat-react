import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

const DropContainer = styled.div`
  width: 170px;

  border-radius: 5px;
  border: solid 1px #f0f0f0;
  background-color: #ffffff;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const DropText = styled.button`
  width: 170px;
  height: 35px;

  border: 0px;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: #797979;
`;

const LineBox = styled.div`
  width: 170px;
  height: 10px;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 170px;
  height: 1px;
  background-color: #f0f0f0;
`;

export class UserDrop extends Component {
  render() {
    return (
      <>
        <HeaderContainer>
          <DropContainer>
            <DropText>프로필 관리</DropText>
            <LineBox>
              <Line />
            </LineBox>
            <DropText>사료 정보</DropText>
            <DropText>운동 정보</DropText>
            <DropText>비만 질병 정보</DropText>
            <LineBox>
              <Line />
            </LineBox>
            <DropText>로그아웃</DropText>
          </DropContainer>
        </HeaderContainer>
      </>
    );
  }
}

export default UserDrop;

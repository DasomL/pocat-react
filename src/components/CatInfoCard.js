import React, { Component } from "react";
import styled from "styled-components";
import kkamang from "../img/kkamang.jpeg";
// import { Link } from "react-router-dom";

const CardBox = styled.div`
  max-width: 420px;
  height: 150px;
  padding: 0px 25px 0px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const InfoText = styled.div`
  width: 170px;
  height: 100px;
  height: auto;
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -0.8px;
  color: #4b4b4b;
  margin-bottom: 13px;
`;

const Breed = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 1.38;
  letter-spacing: -0.3px;
  color: #909090;
  margin-bottom: 3px;
`;

const Birthday = styled.div`
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: -0.3px;
  color: #909090;
`;

const ModifyInfo = styled.div`
  height: 100px;
  font-size: 10px;
  letter-spacing: -0.5px;
  color: #5aa3ff;
`;

export class CatInfoCard extends Component {
  render() {
    return (
      <CardBox>
        <Profile img src={kkamang} alt="" />
        <InfoText>
          <Name>까망이</Name>
          <Breed>코숏</Breed>
          <Birthday>
            2012년 8월 12일 생<br />
            태어난지 6년 7개월
          </Birthday>
        </InfoText>
        {/* 정보수정 링크 넣기 */}
        <ModifyInfo>정보 수정</ModifyInfo>
      </CardBox>
    );
  }
}

export default CatInfoCard;

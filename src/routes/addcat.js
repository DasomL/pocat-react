import React, { Component } from "react";
import styled from "styled-components";
import Select from "react-select";

const Container = styled.div`
  text-align: center;
  position: absolute;
  width: 400px;
  height: 860px;
  top: 50%;
  left: 50%;
  margin-top: -430px;
  margin-left: -200px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.13;
  letter-spacing: -1px;
  text-align: center;
  color: #5aa3ff;
  margin-bottom: 45px;
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

  width: 394px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px #f5f5f5;

  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 240px;
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
  width: 230px;
  height: 45px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.58;
  letter-spacing: -0.5px;
  text-align: center;
  color: #5aa3ff;
  margin-top: 25px;
  margin-bottom: 35px;
`;

const Button = styled.button`
  width: 218px;
  height: 50px;
  border-radius: 5px;
  color: #ffffff;
  transition: all 0.3s;
  border: 1px solid #5aa3ff;
  background-color: #5aa3ff
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

const Neutering = [{ value: "yes", label: "유" }, { value: "no", label: "무" }];
const Pregnancy = [{ value: "yes", label: "유" }, { value: "no", label: "무" }];
const Meal = [{ value: "1000", label: "로얄캐닌 인도어 7+" }];

export class AddCat extends Component {
  render() {
    const customStyles = {
      container: styles => ({
        ...styles,
        width: "394px",
        marginBottom: "10px"
      }),
      valueContainer: styles => ({
        ...styles,
        height: "100%",
        paddingLeft: "22px"
      }),
      control: styles => ({
        ...styles,
        height: "50px",
        borderRadius: "5px",
        border: "solid 1px #f5f5f5"
      }),
      placeholder: styles => ({
        ...styles,
        fontSize: "16px",
        letterSpacing: "-0.5px",
        color: "#cacaca"
      }),
      option: styles => ({
        ...styles,
        fontSize: "16px",
        letterSpacing: "-0.5px",
        color: "#000000"
      }),
      singleValue: styles => ({
        ...styles,
        fontSize: "16px",
        letterSpacing: "-0.5px",
        color: "#000000"
      }),
      indicatorSeparator: styles => ({
        ...styles,
        backgroundColor: "white"
      }),
      dropdownIndicator: styles => ({
        ...styles,
        color: "#c3c3c3"
      })
    };
    return (
      <>
        <Container>
          <Title>
            야옹이를
            <br />
            등록해볼까요?
          </Title>
          <Form>
            <InputBox>
              <Label>이름</Label>
              <Input />
            </InputBox>
            <InputBox>
              <Label>생일</Label>
              <Input />
            </InputBox>
            <InputBox>
              <Label>종류</Label>
              <Input />
            </InputBox>
            <InputBox>
              <Label>몸무게 (kg)</Label>
              <Input />
            </InputBox>
            <Select
              options={Neutering}
              styles={customStyles}
              isSearchable={false}
              placeholder={"중성화여부"}
            />
            <Select
              options={Pregnancy}
              styles={customStyles}
              isSearchable={false}
              placeholder={"임신여부"}
            />
            <Select
              options={Meal}
              styles={customStyles}
              isSearchable={false}
              placeholder={"먹는사료"}
            />

            <InputBox>
              <Label>몸통둘레</Label>
              <Input />
            </InputBox>
            <InputBox>
              <Label>뒷다리길이</Label>
              <Input />
            </InputBox>
            <SmallNotice>
              몸통둘레 : 몸통에서 제일 두꺼운 부분의 둘레
              <br />
              뒷다리 길이 : 뒷다리의 무릎에서 발꿈치까지의 길이
            </SmallNotice>
            <Button>야옹이 등록</Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default AddCat;

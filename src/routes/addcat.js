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

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.13;
  letter-spacing: -1px;
  text-align: center;
  color: #5aa3ff;
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

export class AddCat extends Component {
  render() {
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
              <Label>닉네임</Label>
              <Input />
            </InputBox>
          </Form>
        </Container>
      </>
    );
  }
}

export default AddCat;

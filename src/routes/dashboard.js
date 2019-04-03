import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Header from "../components/Header";
import CatInfoCard from "../components/CatInfoCard";
import HealthCard from "../components/HealthCard";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: auto;
  }
`;

const Contents = styled.div`
  margin: 0 auto;
  max-width: 420px;
  margin-top: 30px;
`;

export class Dashboard extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Contents>
          <CatInfoCard />
          <HealthCard />
          <HealthCard />
          <HealthCard />
          <HealthCard />
        </Contents>
      </>
    );
  }
}

export default Dashboard;

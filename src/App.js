import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/home";
import Join from "./routes/join";
import Login from "./routes/login";
import JoinSuccess from "./routes/joinsuccess";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: auto;
  }
`;

class App extends Component {
  status = {
    nickname: "",
    email: "",
    password: ""
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/join" component={Join} />
          <Route path="/login" component={Login} />
          <Route path="/joinsuccess" component={JoinSuccess} />
        </Router>
      </>
    );
  }
}

export default App;

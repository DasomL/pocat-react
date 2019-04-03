import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/home";
import Join from "./routes/join";
import Login from "./routes/login";
import JoinSuccess from "./routes/joinsuccess";
import AddCat from "./routes/addcat";
import Dashboard from "./routes/dashboard";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: auto;
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/join" component={Join} />
          <Route path="/login" component={Login} />
          <Route path="/joinsuccess" component={JoinSuccess} />
          <Route path="/addcat" component={AddCat} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
      </>
    );
  }
}

export default App;

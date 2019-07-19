import React from "react";
import logo from "./logo.svg";
import UserComponent from "./Components/UserComponent";
import GithubUserComponent from "./Components/GithubUserComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <UserComponent /> */}
        <GithubUserComponent />
      </header>
    </div>
  );
}

export default App;

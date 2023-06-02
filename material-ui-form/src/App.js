import React, { Component } from "react";
import LetTest from "./components/LetTest";
import UserForm from "./components/UserForm";

export class App extends Component {
  render() {
    return (
      <div>
        <LetTest />
        <UserForm />
      </div>
    );
  }
}

export default App;

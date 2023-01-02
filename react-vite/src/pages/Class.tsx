import React, { Component } from "react";
import Button from "../components/Button";
import reactLogo from "../assets/react.svg";
import "../styles/App.css";

export class Class extends Component {
  state = {
    count: 0,
    title: "",
  };

  clickHandler() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="App">
        <div className="flex justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-yellow-300">Vite + React</h1>
        <div className="card">
          <Button
            label={`count is ${this.state.count}`}
            onClick={() => this.clickHandler()}
          />
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    );
  }
}

export default Class;

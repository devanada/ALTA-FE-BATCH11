import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div className="mb-3">
        <input className="input input-bordered w-full" />
      </div>
    );
  }
}

export class TextArea extends Component {
  render() {
    return (
      <div className="mb-3">
        <textarea className="input input-bordered w-full" />
      </div>
    );
  }
}

export default Input;

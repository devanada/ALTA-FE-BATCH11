import React, { Component } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        className="bg-gray-600 border border-purple-500"
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;

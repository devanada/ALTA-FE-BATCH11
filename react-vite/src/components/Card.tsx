import React, { Component } from "react";

import Button from "./Button";

interface CardProps {
  title: string;
  image: string;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="mx-auto"
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center justify-between">
          <h2 className="card-title text-center">{this.props.title}</h2>
          <div className="card-actions w-full justify-center">
            <Button label="ADD TO FAVORITE" />
          </div>
        </div>
      </div>
    );
  }
}

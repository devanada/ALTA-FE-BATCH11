import React, { Component } from "react";

import Button from "./Button";

interface CardProps {
  title: string;
  image: string;
  id: number;
  labelButton: string;
  onClickFav?: () => void;
}

export default class Card extends Component<CardProps> {
  onClickDetail() {
    alert(`Movie ${this.props.id} selected`);
  }

  render() {
    return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure onClick={() => this.onClickDetail()}>
          <img
            className="mx-auto"
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center justify-between">
          <h2
            className="card-title text-center"
            onClick={() => this.onClickDetail()}
          >
            {this.props.title}
          </h2>
          <div className="card-actions w-full justify-center">
            <Button
              label={this.props.labelButton}
              onClick={this.props.onClickFav}
            />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

interface CardProps {
  title: string;
  image: string;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={this.props.image} alt={this.props.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{this.props.title}</h2>
          <div className="card-actions justify-center">
            <button className="btn btn-primary w-full">Add to Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}

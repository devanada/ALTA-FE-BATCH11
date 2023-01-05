import { Link } from "react-router-dom";
import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-base-100">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Cinephile
        </Link>
      </div>
    );
  }
}

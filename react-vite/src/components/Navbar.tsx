import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Cinephile
      </Link>
      <Link to="/favorites" className="btn btn-ghost normal-case text-xl">
        Favorite
      </Link>
      <Link to="/sandbox" className="btn btn-ghost normal-case text-xl">
        Sandbox
      </Link>
    </div>
  );
};

export default Navbar;

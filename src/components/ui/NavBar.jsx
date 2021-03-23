import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import logo from "../../img/MyLogo.png";

export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: 'logout',
    });
    history.replace('/login')
  };

  return (
    <nav className="flex justify-between py-2 px-8 bg-black">
      <Link className="text-white text-xl" to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="flex gap-8 items-center">
        <NavLink
          activeClassName="active"
          className="text-white text-lg"
          exact
          to="/marvel"
        >
          Marvel
        </NavLink>

        <NavLink
          activeClassName="active"
          className="text-white text-lg"
          exact
          to="/dc"
        >
          DC
        </NavLink>

        <NavLink
          activeClassName="active"
          className="text-white text-lg"
          exact
          to="/search"
        >
          Search
        </NavLink>

        <span className="ml-16 text-pink-700 text-lg"> {name} </span>
        <button
          className="text-white text-lg  py-1 px-4 bg-pink-700 rounded-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

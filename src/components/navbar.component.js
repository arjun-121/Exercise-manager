import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky">
      <div className="navbar-brand">ExcerciseTracker</div>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <NavLink to="/exercise" className="nav-link">
              Exercises
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/create" className="nav-link">
              Create Exercise Log
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/user" className="nav-link">
              Create User
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <span>Listicle</span>
          </Link>
        </div>
        <SearchBar className="searchBar" />
        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

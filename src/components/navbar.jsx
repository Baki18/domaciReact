import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Prodavnica </Link>
        <Link to="/kontakt"> Kontakt </Link>
        <Link to="/korpa">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

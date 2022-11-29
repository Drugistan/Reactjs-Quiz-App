import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title"> Quiz Hubbing </Link>
      <hr className="divider"/> 
    </div>
  );
};

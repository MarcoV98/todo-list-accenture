import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <p className="header__text">Task-Helper</p>
      <Navbar />
    </header>
  );
}

export default Header;

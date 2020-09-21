import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className='header'>
      <a href='/home'>
        <i className='fab fa-accusoft fa-2x'></i>
        <h1>Admin Panel</h1>
      </a>
    </header>
  );
}

export default Header;

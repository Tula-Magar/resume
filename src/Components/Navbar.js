import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import CloseMenu from "../assets/x.svg";
import MenuIcon from "../assets/menu.svg";
import Logo from "../assets/logo.svg";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <Link className="link" href="#">
              <Logo className="logo" />
            </Link>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link className="link" to="/education">
                EDUCATION
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link className="link" to="/experience">
                EXPERIENCE
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link className="link" to="/projects">
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>

        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;

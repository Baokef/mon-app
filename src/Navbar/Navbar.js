
import React, {useState, useEffect} from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
      <nav>
        <ul className="liste">
          <li>
            <a className="items" href="/">
              ACCUEIL
            </a>
          </li>
          <li>
            <a className="items" href="/Compte">
              Compte
            </a>
          </li>
          <li>
            <a className="items" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
        <button className="btn">BTN</button>
      </nav>
    );
};

export default Navbar;
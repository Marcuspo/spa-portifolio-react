import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => (
  <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo right">
        Marcus Pontes
      </a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contato</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;

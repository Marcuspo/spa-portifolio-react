import React from "react";

const Header = () => (
  <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo right">
        Marcus Pontes
      </a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contato</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;

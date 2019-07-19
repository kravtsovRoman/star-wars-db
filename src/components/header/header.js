import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#asd">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#asd">People</a>
        </li>
        <li>
          <a href="#asd">Planets</a>
        </li>
        <li>
          <a href="#asd">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
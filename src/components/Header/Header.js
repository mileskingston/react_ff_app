import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header(props) {
  return (
    <header className="header">
      <a href="/">
        <h1 className="logo">Logo</h1>
      </a>
    </header>
  );
}

Header.displayName = 'Header';

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

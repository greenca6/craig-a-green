import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ exploded }) => (
  <header className={`navbar${exploded ? ' exploded' : ''}`}>
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="/">craig a. green</a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><a href="/about">About</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  exploded: PropTypes.bool,
};

Header.defaultProps = {
  exploded: false,
};

export default Header;

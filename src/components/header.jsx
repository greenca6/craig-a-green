import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ onTogglerClick }) => (
  <header className="navbar navbar-expand-md fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">craig a. green</a>
      </div>
      <button onClick={onTogglerClick} type="button" className="navbar-toggler collapsed">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav ml-auto">
          <li><Link to="/profile" href="/profile">Profile</Link></li>
          <li><Link to="/blog" href="/blog">Blog</Link></li>
          <li><Link to="/contact" href="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  onTogglerClick: PropTypes.func,
};

Header.defaultProps = {
  onTogglerClick: null,
};

export default Header;

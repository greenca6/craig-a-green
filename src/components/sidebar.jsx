import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, onCloseClick }) => (
  <aside className={open ? 'open' : ''}>
    <button onClick={onCloseClick} type="button" className="btn" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <ul>
      <li><Link to="/profile" href="/profile">Profile</Link></li>
      <li><Link to="/blog" href="/blog">Blog</Link></li>
      <li><Link to="/contact" href="/contact">Contact</Link></li>
    </ul>
  </aside>
);

Sidebar.propTypes = {
  open: PropTypes.bool,
  onCloseClick: PropTypes.func,
};

Sidebar.defaultProps = {
  open: false,
  onCloseClick: null,
};

export default Sidebar;

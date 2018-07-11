import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-light border-top border-primary py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Navigate</h5>
          <div className="row">
            <div className="col-sm-6">
              <Link to="/profile" href="/profile">Profile</Link><br />
              <Link to="/blog" href="/blog">Blog</Link><br />
              <Link to="/contact" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

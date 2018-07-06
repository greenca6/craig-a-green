import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="footer-section">
            <h5>Connect</h5>
            <div className="row">
              <div className="col-md-12">
                <a href="http://facebook.com" className="social-media-icon">
                  <img alt="" className="icon" src="assets/img/facebook.svg" />
                </a>
                <a href="http://twitter.com" className="social-media-icon">
                  <img alt="" className="icon" src="assets/img/twitter.svg" />
                </a>
                <a href="http://linkedin.com" className="social-media-icon">
                  <img alt="" className="icon" src="assets/img/linked_in.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="footer-section">
            <h5>Navigate</h5>
            <div className="row">
              <div className="col-xs-6">
                <a href="/">About</a><br />
                <a href="/">Profile</a>
              </div>
              <div className="col-xs-6">
                <a href="/">Blog</a><br />
                <a href="/">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

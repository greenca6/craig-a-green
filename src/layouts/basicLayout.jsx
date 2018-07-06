import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../components';

const BasicLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
  </React.Fragment>
);

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;

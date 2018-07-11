import React from 'react';
import { Header } from '../components';

// TODO: remove Header component, use custom header for Home Page
const Home = () => (
  <React.Fragment>
    <Header />
    <div className="container">
      <h1>Home</h1>
    </div>
  </React.Fragment>
);

export default Home;

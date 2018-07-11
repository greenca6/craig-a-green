import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import {
  Contact,
  Home,
  Profile,
  Blog,
} from './pages';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/blog" component={Blog} />
    </React.Fragment>
  </Router>
);

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Sidebar } from '../components';

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false }; // eslint-disable-line
  }

  toggleSidebar() {
    const { sidebarOpen } = this.state;
    this.setState({ sidebarOpen: !sidebarOpen });
  }

  render() {
    const { children } = this.props;
    const { sidebarOpen } = this.state;

    return (
      <React.Fragment>
        <Header onTogglerClick={() => this.toggleSidebar()} />
        <Sidebar open={sidebarOpen} onCloseClick={() => this.toggleSidebar()} />
        <div className="container" style={{ /* extra padding for header */ paddingTop: '70px' }}>
          <main>
            {children}
          </main>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;

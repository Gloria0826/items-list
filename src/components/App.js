import React, { Component, Fragment } from 'react';
import AppNavbar from './AppNavbar';
import PageManagement from './PageManagement';
import Auth from './Auth';
import { isAuthenticated } from '../utils/utils';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppNavbar />
        {isAuthenticated() ? (
          <PageManagement />
        ) : ( <Auth /> )}
      </Fragment>
    );
  }
}

export default App;

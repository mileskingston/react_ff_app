import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/index';

import TableWidget from './TableWidget/TableWidget';
import Header from './Header/Header';

import './App.scss';

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchTeams();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Header />
                <TableWidget />
              </Fragment>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

App.displayName = 'App';

App.propTypes = {
  fetchTeams: PropTypes.func
};
App.defaultProps = {
  fetchTeams: () => {}
};

function mapStateToProps(state) {
  return {
    details: state.details
  };
}

export default connect(mapStateToProps, { fetchTeams })(App);

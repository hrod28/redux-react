'use strict';
//we will use a parent component that houses markup that we want to display
//on every page, such as a header or footer and that will wrap the other components

//This component hadles the app template used on every page.
import React, {PropTypes} from 'react';
//import Header from './common/Header';
//import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
          {this.props.children}
      </div>                 //'{this.props.children}' is passing down children it receives as props
                             //react-router will be passing child components
    );                      //as properites onto our app components
  }
}
//should have prop type validation
App.propTypes = { //added children as a requires prop type on this compont
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default(App);

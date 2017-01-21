'use strict';
import React from 'react';
//importing the link component from react router
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
    //react router will handle the anchor tag "Link to='about'" which will
    //then take you to the about page (in reference to line 12)
  }
}

export default HomePage;//this piece of code means that when someone else imports
// this file, it will say import HomePage from HomePage and they will get a reference
// to the homepage class

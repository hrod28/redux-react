'use strict';

import React from 'react';
//pulling out route and IndexRoute from the router and index route is what
//is used when there is just a root path that we want to expose as in line
//14 will reference home page so if someone just went to '/', it will load
//the home page, otherwise if the path is '/about', then we load the about
//page instead.
import {Route, IndexRoute} from 'react-router';
//below is requiring all of the components we've made so far.
import app from './components/app';
import homePage from './components/home/homePage';
import aboutPage from './components/about/aboutPage';

export default(
      //by placing the reference to the app component below it is saying:
      //always load the app component and then nest these other
      //two(homePage, aboutPage) and pass them as children based on
      //our routing.  So, if we have a url that is just '/homePage', then
      //homepage will be passed as a child the app component, and will
      //end up composed in app.js.

      //further example is if someone hit the '/about', then
      //this correlates to: {this.props.children} from the app.js file, and
      //app.js will end up getting the aboutPage component because it is
      //a child of the app component by react router.
    <Route path = "/" component = {app}>
      <IndexRoute component = {homePage} />
      <Route path ="about" component = {aboutPage} />
    </Route>
);

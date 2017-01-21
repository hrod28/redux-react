'use strict';
//container: behavior, actions, little to no markup and know about redux.
//Presentation: neary all markup meaning that they shold not have logic inside,
//presentation components receive functions and data that they need from a
//container component, and rely on props to display UI


//This is where we update our application's entry point to finalize routing
/*eslint-disable import/default */
import 'babel-polyfill';//this extension or plug-in takes care of any transpiling
                        //that babel itself cannot handle.
import React from 'react';
import { render } from 'react-dom'; //pulling react-dom so we have a render function
                                    //that works in the browser
import { Router, browserHistory } from 'react-router';//browserHistory takes care
                                                      //the hash tag on URLs
import routes from './routes';//referecing the routes.js file
import './styles/styles.css'; //Webpack can import CSS files, too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history = {browserHistory} routes = {routes} />,
      document.getElementById('app')
);

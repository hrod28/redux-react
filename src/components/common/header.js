'use strict';
//this will be our first stateless controller called Header

import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';

// this header component gets referenced on the app.js file.  the Header component
// is also imported on the app.js page
const Header = ()=>{
    return (

      //using the indexLink component from react-router to handle this
      //index link that just has a slash and the 'activeClassName="active"'
      //piece of code says when that link is active, based on the route, go ahead
      //and apply a class for me.  So you can style the currently selected anchor
      //the header
      <nav>
        <IndexLink to ="/" activeClassName="active">Home</IndexLink>
          {" | "} // putting a pipe between the links to keep layout simple
          <Link to= "/about" activeClassName="active">About</Link>
      </nav>
    );
};

export default Header;

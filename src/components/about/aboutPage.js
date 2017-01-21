'use strict';

import React from 'react';

//creating a class based component below and the reason for this as opposed to a
// stateless component, is that because of the limitations of hot reloading, it's
// useful to add a class because stateless components will not be reloaded unless they have
// some parent that is a class.
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;

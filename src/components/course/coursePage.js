'use strict';

import React, {PropTypes} from 'react';

//traditionally, the form would be in a sepatate folder for markup

//first we make a contructor so we can initialize state for the form
// in the constructor
class coursePage extends React.Component {
    constructor(props, context){
      super(props, context);
      //setting local state here, and title is the only property that it
      //will have
      this.state = {
        course: { title: null}
      };
    }

    //this function pulls in the event,
    onTitleChange(event) {
        const course = this.state.course;//then pull that value out of that event
        course.title = event.target.value;// off of the target, and set that to the title
        this.setState({course: course});// and update our state by calling 'setState'
    } // the above function will effectively update the state whenever someone presses
      // a key when they are focused on the title field.

    onClickSave(){
      alert(`Saving ${this.state.course.title}`);
    }

    render() {
      return(
        <div>
          <h1> Courses< /h1>
          <h2> Add Course<h2>
          <input
            type="text"
            onChange={this.onTitleChange}
            value={ this.state.coures.title} />

          <input
            type="submit"
            value="Save"
            onClick ={ this.onClickSave } />
        </div>
    }
  )
}

export default coursePage;

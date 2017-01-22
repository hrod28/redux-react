'use strict';

import React, {PropTypes} from 'react';
//connect allows the component to work with redux
import {connect} from 'react-redux';
//create a reference to the createCourse action we made earlier
import * as courseActions from '../../actions/courseActions';
// *******I have question about the syntax of this * thing****

class coursePage extends React.Component {
    constructor(props, context){
      super(props, context);
      this.state = {
        course: { title: ""}
      };

      // Best practice is to do your bindings in your constructor functions
      // instead of putting inside of the render function and bind is a function
      // so it becomes a performance issue
      this.onTitleChange = this.onTitleChange.bind(this);
      this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(){
      this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    render() {
      return(
        <div>
          <h1> Courses:</h1>
          <h2> Add Course: </h2>
          <input type= "text"
                 onChange={this.onTitleChange}
                 value={this.state.course.title} />
          <input type = "submit"
                 value = "Save"
                 onClick = {this.onClickSave} />
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// the connect function is what allows our components to interract
// with redux, or container components
export default connect(mapStateToProps)(coursePage);//get a linter warning that dispatch is missing
// here 'coursePage' is wrapped in a call to connect.
// connect is a higher order component that is going
// to wrap our courses page and takes 2 paramerers.  Each of these
// parameters is a function.

// mapStateToProps is:

//inside the function, define an object that returns the properties
//that we would like to see exposed on our component.  For example,
//If courses is in the return object, you are saying that you want to
// be able to access our courses by saying: 'this.props.courses' up on
// the above component
//  function mapStateToProps(state, ownProps){
//      return {
//        courses: state.courses //this allows you to access/pull the course data
//                               //because the state parameter represents
//                               //the state that is within the redux store
//      };
// }//note: the name of the property of whatever is in the return object,
 //in this case, courses, is determined by whatever you named
 //it in the object of the rootReducer function on the index.js page
 //in the reducers folder

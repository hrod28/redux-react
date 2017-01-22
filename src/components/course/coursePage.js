'use strict';

import React, {PropTypes} from 'react';
//connect allows the component to work with redux
import {connect} from 'react-redux';
//create a reference to the createCourse action we made earlier
import * as courseActions from '../../actions/courseActions';
// *******I have question about the syntax of this * thing****

import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class coursePage extends React.Component {
    constructor(props, context){
      super(props, context);
   }

    courseRow(course, index){
       return <div key={index}>{course.title}</div>;
     }

    render() {
      const {courses} = this.props;
      return(
        //this displays the current list of courses and references courseRow funcition above
        <div>
          <h1> Courses:</h1>
          <CourseList courses={courses}/>
          </div>
        );
      }
    }

coursePage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };//this function takes all the actions in courseActions and wraps them
    //in a call to dispatch.
}

// the connect function is what allows our components to interract
// with redux, or container components
export default connect(mapStateToProps, mapDispatchToProps)(coursePage);//get a linter warning that dispatch is missing
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

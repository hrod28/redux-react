'use strict';

import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';


export function loadCoursesSuccess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses};//then go to courseReducer
}


//  in this above function, the action is an object that has
//  property of 'type', and type is required.

//thunks
export function loadCourses(){
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(err =>{
      throw(err);
    });
  };
}

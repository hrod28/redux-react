'use strict';

import * as types from '../actions/actionTypes';
import initialState from './initialState';
// Reducers handle actions
// They are functions that accepts a state in an action and then
// returns a new state.
// a reducer takes two actions, one is state and the other is action because
// what a reducer does is takes current state in an action and returns new state
export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
      // although it may seem natural to do it like this:
              // state.push(action.course);
              // return state;
      //but since state cannot be mutable, do it this way:
        case types.LOAD_COURSES_SUCCESS:

          return action.courses;

    // the spread operator is returning a new instance of our state array.  then
    // we use Object.assign to create a deep copy of the course that was passed in
    // So now, these two values together (...state, object.assign) end up returning
    // a brand new state that contains the new course someone has just passed in
    // via the action.
        default:
          return state;

    }
}

'use strict';

import * as types from './actionTypes';

export function createCourse (course){
  return { type: types.CREATE_COURSE, course};//then go to courseReducer
}


//  in this above function, the action is an object that has
//  property of 'type', and type is required.

// Reducers handle actions
// It is a function that accepts a state in an action and then
// returns a new state.

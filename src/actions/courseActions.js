'use strict';

//import * as types from './actionTypes';

export function createCourse (course){
  return { type: 'CREATE_COURSE', course};
}


//  in this above function, the action is an object that has
//  property of 'type', and type is required.

// Reducers handle actions
// It is a function that accepts a state in an action and then
// returns a new state.

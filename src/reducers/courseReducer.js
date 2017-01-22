'use strict';

// Reducers handle actions
// They are functions that accepts a state in an action and then
// returns a new state.
// a reducer takes two actions, one is state and the other is action because
// what a reducer does is takes current state in an action and returns new state
export default function courseReducer(state = [], action){
    switch (action.type) {
      // although it may seem natural to do it like this:
              // state.push(action.course);
              // return state;
      //but since state cannot be mutable, do it this way:
        case 'CREATE_COURSE':
          return [...state,
              Object.assign({}, action.course)
            ];
    // the spread operator is returning a new instance of our state array.  then
    // we use Object.assign to create a deep copy of the course that was passed in
    // So now, these two values together (...state, object.assign) end up returning
    // a brand new state that contains the new course someone has just passed in
    // via the action.

        default:
          return state;

    }
}

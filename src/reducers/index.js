'use strict';
//Root reducer

import {combineReducers} from 'redux';//combineReducers is a function from redux
import courses from './courseReducer';

// now we define our rootReducer
// courses is a shorthand property name (es6)
const rootReducer = combineReducers({
    courses
});

export default rootReducer;

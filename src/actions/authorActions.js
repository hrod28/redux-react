'use strict';

import AuthorApi from '../mockAuthorApi';
import * as types from './ajaxStatusActions';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(err => {
      throw(err);
    });
  };
}

// import AuthorApi from '../api/mockAuthorApi';
// import * as types from './actionTypes';
// import {beginAjaxCall} from './ajaxStatusActions';
//
// export function loadAuthorsSuccess(authors) {
//   return {type: types.LOAD_AUTHORS_SUCCESS, authors};
// }
//
// export function loadAuthors() {
//   return dispatch => {
//     dispatch(beginAjaxCall());
//     return AuthorApi.getAllAuthors().then(authors => {
//       dispatch(loadAuthorsSuccess(authors));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

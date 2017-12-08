//params: initial state

import { FETCH_CARDS } from '../actions/actionTypes';

export default function(state = [], action){

  switch(action.type){
    case FETCH_CARDS:
      return action.payload;
    default:
      return state;
  }
}

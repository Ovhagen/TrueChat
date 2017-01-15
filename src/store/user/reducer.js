import {LOGIN, LOGOUT} from './actions';

export default function user(state={}, action){
  switch(action.type){
    case LOGIN:
    //TODO
    return;

    case LOGOUT:
    return;

    default:
    return state;
  }
}

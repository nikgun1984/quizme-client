/* Action for setting up boolean value for reducer */

import {SET_WINNER} from '../constants/actionTypes';

export function setWinner() {
  return {
    type: SET_WINNER
  };
}
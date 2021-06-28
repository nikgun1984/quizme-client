/* Action for setting up boolean value for reducer */

import {SET_WINNER,SET_WINNER_OFF} from '../constants/actionTypes';

export function setWinner() {
  return {
    type: SET_WINNER
  };
}

export function setWinnerOff() {
  return {
    type: SET_WINNER_OFF
  };
}
/* reducer for saving state for boolean value setWinner */
import {SET_WINNER,SET_WINNER_OFF,UserWinnerOnOff} from '../constants/actionTypes';
import {IWinnerState} from '../../interfaces/reducers';

const defaultState:IWinnerState = {
	setWinner: false,
};

const winnerReducer = (state:IWinnerState = defaultState, action:UserWinnerOnOff):IWinnerState => {
	switch(action.type){
		case SET_WINNER:
			return {...state, setWinner: !state.setWinner,}
		case SET_WINNER_OFF:
			return {...state, setWinner: false,}
		default:
			return state;
	}
}

export default winnerReducer;
/* reducer for saving state for boolean value setWinner */
import {SET_WINNER,UserWinner} from '../constants/actionTypes';
import {IWinnerState} from '../../interfaces/reducers';

const defaultState:IWinnerState = {
	setWinner: false,
};

const winnerReducer = (state:IWinnerState = defaultState, action:UserWinner):IWinnerState => {
	console.log(action)
	console.log(state);
	switch(action.type){
		case SET_WINNER:
			return {...state, setWinner: !state.setWinner,}
		default:
			return state;
	}
}

export default winnerReducer;
import { combineReducers } from "redux";
import studysetReducer from './studysetReducer';
import winnerReducer from './winnerReducer';

const RootReducer = combineReducers({
	studysets: studysetReducer,
	setWinner: winnerReducer
})

export default RootReducer;
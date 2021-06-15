import { combineReducers } from "redux";
import studysetReducer from './studysetReducer';
import winnerReducer from './winnerReducer';
import wordReducer from './wordReducer';


const RootReducer = combineReducers({
	studysets: studysetReducer,
	setWinner: winnerReducer,
	word: wordReducer
})

export default RootReducer;
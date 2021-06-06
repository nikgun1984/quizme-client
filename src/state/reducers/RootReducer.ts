import { combineReducers } from "redux";
import studysetReducer from './studysetReducer';

const RootReducer = combineReducers({
	studysets: studysetReducer
})

export default RootReducer;
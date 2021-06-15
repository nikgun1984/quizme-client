/* reducer for handling user's studysets */

import {SET_WORD,WordDispatchTypes} from '../constants/actionTypes';
import {IWordState} from '../../interfaces/reducers';

const defaultState:IWordState = {
	word: {
		term: "",
  		partOfSpeech: "",
  		defs: "",
  		syllable: ""
	}
};

const wordReducer = (state:IWordState = defaultState, action:WordDispatchTypes):IWordState => {
	switch(action.type){
		case SET_WORD:
			return {
				word: action.payload
			}
		default:
			return state;
	}
}

export default wordReducer;
/* reducer for handling user's studysets */

import {USER_STUDYSETS_FAIL, USER_STUDYSETS_LOADING, USER_STUDYSETS_SUCCESS, DELETE_FLASHCARD, DELETE_STUDYSET, UserStudysetDispatchTypes} from '../constants/actionTypes';
import {IDefaultState} from '../../interfaces/reducers';
import { IStudySetResponse } from '../../interfaces/apis';

const defaultState:IDefaultState = {
	loading: false,
};

const studysetReducer = (state:IDefaultState = defaultState, action:UserStudysetDispatchTypes):IDefaultState => {
	switch(action.type){
		case USER_STUDYSETS_FAIL:
			return {
				loading:false,
			}

		case USER_STUDYSETS_LOADING:
			return {
				loading:true,
			}
		case USER_STUDYSETS_SUCCESS:
			return {
				loading: false,
				studysets: action.payload
			}
		case DELETE_FLASHCARD:
            if(state.studysets){
				return {
					loading: false,
					studysets: state.studysets.map(el=>{
						console.log('ID: '+action.id);
						console.log('Study ID: '+action.studySetID);
						if(+el.id === action.studySetID){
							console.log('I am in...')
							return {...el,cards:el.cards.filter(card=>+card.id !== action.id)};
						}
						return el;
					})
			    };
			}
			return state;
		case DELETE_STUDYSET:
            if(state.studysets){
				return {
					loading: false,
					studysets: state.studysets.filter(el=> +el.id !== action.id)
			    };
			}
			return state;
		default:
			return state;
	}
}

export default studysetReducer;
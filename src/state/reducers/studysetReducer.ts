import {USER_STUDYSETS_FAIL, USER_STUDYSETS_LOADING, USER_STUDYSETS_SUCCESS, UserStudysetDispatchTypes} from '../constants/actionTypes';
import {IDefaultState} from '../../interfaces/reducers';

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
		default:
			return state;
	}
}

export default studysetReducer;
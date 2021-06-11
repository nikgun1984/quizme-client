import {USER_STUDYSETS_LOADING,USER_STUDYSETS_SUCCESS,USER_STUDYSETS_FAIL,UserStudysetDispatchTypes} from '../constants/actionTypes';
import { Dispatch } from 'redux';
import { QuizmeApi } from '../../api';

export const getUserStudySets = (username:string) => async(dispatch:Dispatch<UserStudysetDispatchTypes>) => {
	try {
		
		dispatch({
			type: USER_STUDYSETS_LOADING
		})

		const response = await QuizmeApi.getMyStudysets(username);

		dispatch({
			type: USER_STUDYSETS_SUCCESS,
			payload: response
		})
	} catch(e){
		dispatch({
			type: USER_STUDYSETS_FAIL
		})
	}
}

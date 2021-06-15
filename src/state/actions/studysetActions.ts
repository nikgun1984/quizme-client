import {USER_STUDYSETS_LOADING,USER_STUDYSETS_SUCCESS,USER_STUDYSETS_FAIL,UserStudysetDispatchTypes,DELETE_FLASHCARD,DELETE_STUDYSET} from '../constants/actionTypes';
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

export const deleteFlashCard = (id:number,studySetID:number) =>  {
	return {type: DELETE_FLASHCARD, id, studySetID}
}

export const deleteStudyset = (id:number) =>  {
	return {type: DELETE_STUDYSET, id}
}

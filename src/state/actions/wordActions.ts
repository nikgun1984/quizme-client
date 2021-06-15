import {SET_WORD,SET_WORD_FAIL,WordDispatchTypes} from '../constants/actionTypes';
import { Dispatch } from 'redux';
import { QuizmeApi } from '../../api';

export const getWord = (date:string) => async(dispatch:Dispatch<WordDispatchTypes>) => {
	try {
		
		const response = await QuizmeApi.getWordDetails(date);

		dispatch({
			type: SET_WORD,
			payload: response
		})
	} catch(e){
		dispatch({
			type: SET_WORD_FAIL
		})
	}
}
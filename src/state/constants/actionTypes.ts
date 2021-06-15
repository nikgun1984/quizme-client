/* Action Types and Interfaces for out reducers */

import {IStudySetResponse,IResponseWord} from '../../interfaces/apis';

export const USER_STUDYSETS_LOADING = "USER_STUDYSETS_LOADING";
export const USER_STUDYSETS_FAIL = "USER_STUDYSETS_FAIL";
export const USER_STUDYSETS_SUCCESS = "USER_STUDYSETS_SUCCESS";
export const SET_WINNER = "SET_WINNER";
export const SET_WORD = "SET_WORD";
export const SET_WORD_FAIL = "SET_WORD_FAIL";
export const DELETE_FLASHCARD = "DELETE_FLASHCARD";
export const DELETE_STUDYSET = "DELETE_STUDYSET";


export interface UserStudysetLoading {
	type: typeof USER_STUDYSETS_LOADING
}

export interface UserStudysetFail {
	type: typeof USER_STUDYSETS_FAIL
}

export interface UserStudysetSuccess {
	type: typeof USER_STUDYSETS_SUCCESS,
	payload: IStudySetResponse[],
}

export interface UserWinner {
	type: typeof SET_WINNER,
	payload: boolean;
}

export interface IWord{
	type: typeof SET_WORD,
	payload: IResponseWord;
}

export interface IWordFail{
	type: typeof SET_WORD_FAIL,
}

export interface IDeleteFlashCard{
	type: typeof DELETE_FLASHCARD,
	id:number,
	studySetID:number
}

export interface IDeleteStudyset{
	type: typeof DELETE_STUDYSET,
	id:number
}

export type UserStudysetDispatchTypes = UserStudysetLoading | UserStudysetFail | UserStudysetSuccess | IDeleteFlashCard | IDeleteStudyset;
export type  WordDispatchTypes = IWordFail | IWord;

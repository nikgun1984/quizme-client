/* Action Types and Interfaces for out reducers */

import {IStudySetResponse} from '../../interfaces/apis';

export const USER_STUDYSETS_LOADING = "USER_STUDYSETS_LOADING";
export const USER_STUDYSETS_FAIL = "USER_STUDYSETS_FAIL";
export const USER_STUDYSETS_SUCCESS = "USER_STUDYSETS_SUCCESS";
export const SET_WINNER = "SET_WINNER";

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

export type UserStudysetDispatchTypes = UserStudysetLoading | UserStudysetFail | UserStudysetSuccess;


import {IStudySetResponse} from '../../interfaces/apis';

export const USER_STUDYSETS_LOADING = "USER_STUDYSETS_LOADING";
export const USER_STUDYSETS_FAIL = "USER_STUDYSETS_FAIL";
export const USER_STUDYSETS_SUCCESS = "USER_STUDYSETS_SUCCESS";

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

export type UserStudysetDispatchTypes = UserStudysetLoading | UserStudysetFail | UserStudysetSuccess;
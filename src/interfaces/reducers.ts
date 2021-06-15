/* Interfaces for Reducers */

import {IStudySetResponse,IResponseWord} from './apis';

export interface IDefaultState{
	loading: boolean;
	studysets?: IStudySetResponse[];
}

export interface IWinnerState {
	setWinner: boolean;
}

export interface IWordState {
	word: IResponseWord;
}

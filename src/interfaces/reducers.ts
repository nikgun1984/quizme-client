import {IStudySetResponse} from './apis';

export interface IDefaultState{
	loading: boolean;
	studysets?: IStudySetResponse[];
}
import axios, { AxiosResponse } from 'axios';
import {IToken} from './interfaces/apis';
import {IStudySetResponse,IResponseWord,IDeletedFlashcard} from  './interfaces/apis';

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *https://quizme-api.herokuapp.com/
 */
// const token = localStorage.getItem('token') || "";

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3001",
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token') || ""}`
	}
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const QuizmeApi = {
	getAuthorization: (formData:{}, url:string): Promise<IToken> => requests.post(`auth/${url}`,formData),
	createStudyForm:  (formData:{}, url:string): Promise<IToken> => requests.post(`studysets`,formData),
	editStudyForm:  (formData:{}, id:string): Promise<IStudySetResponse> => requests.put(`studysets/${id}`,formData),
	getMyStudysets: (url:string): Promise<IStudySetResponse[]> => requests.get(`studysets/${url}/all`),
	getStudySet: (id:string): Promise<IStudySetResponse> => requests.get(`studysets/${id}`),
	getWordDetails: (date:string): Promise<IResponseWord> => requests.get(`dailyword?date=${date}`),
	removeFlashcard: (id:string): Promise<IDeletedFlashcard> => requests.delete(`studysets/flashcard/${id}`),
    removeStudyset: (id:string): Promise<IDeletedFlashcard> => requests.delete(`studysets/${id}`)
};

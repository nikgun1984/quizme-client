import axios, { AxiosResponse } from 'axios';
import {IToken} from './interfaces/apis';
// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3001",
	timeout: 15000,
	// withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`
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
	createStudyForm:  (formData:{}, url:string): Promise<IToken> => requests.post(`studysets`,formData)
	// getAPost: (id: number): Promise<IRegisterForm> => requests.get(`posts/${id}`),
	// createPost: (post: IRegisterForm): Promise<IRegisterForm> =>
	// 	requests.post('posts', post),
	// updatePost: (post: IRegisterForm, id: number): Promise<IRegisterForm> =>
	// 	requests.put(`posts/${id}`, post),
	// deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};



// class QuizmeApi {
// 	// the token for interactive with the API will be stored here.
// 	static token;

// 	static async request(endpoint:string, data:object = {}, method:string = "get") {
// 		console.debug("API Call:", endpoint, data, method);

// 		const url:string = `${BASE_URL}/${endpoint}`;
// 		const headers: {} = { Authorization: `Bearer ${QuizmeApi.token}` };
// 		let params:object;
// 		switch (method) {
// 			case "get":
// 			case "post":
// 			case "patch":
// 			case "delete":
// 				params = data;
// 				break;
// 			default:
// 				params = {};
// 		}
// 		try {
// 			return (await axios({ url, method, data, params, headers })).data;
// 		} catch (err) {
// 			console.error("API Error:", err.response);
// 			let message = err.response.data.error.message;
// 			throw Array.isArray(message) ? message : [message];
// 		}
// 	}

// 	// Individual API routes

// 	/* Authorize a user to be able to see other features -- login/register */

// 	static async getAuthorization(formData, url) {
// 		let res = await this.request(`auth/${url}`, formData, "post");
// 		QuizmeApi.token = res.token;
// 		return res.token;
// 	}

// 	/* Get information on a particular user */

// 	static async getUserInfo(username, token) {
// 		QuizmeApi.token = token;
// 		let res = await this.request(`users/${username}`);
// 		return res;
// 	}

// 	/* Edit user using formData */

// 	static async editUserInfo(formData, userName, token) {
// 		QuizmeApi.token = token;
// 		let user = (await this.request(`users/${userName}`, formData, "patch"))
// 			.user;
// 		return user;
// 	}
// }

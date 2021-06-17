import React, {useEffect,useCallback,useContext,useState} from 'react';
import IPage from '../interfaces/page';
import { useHistory } from 'react-router-dom';
import logging from'../configs/logging';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {ILoginForm} from '../interfaces/forms';
import {loginSchema} from '../validation/loginSchema';
import qlogo from '../qlogo.png';
import { QuizmeApi } from '../api';
import AppContext from "../appContext";

const LoginPage: React.FC<IPage> = (props) => {
    const history = useHistory();
	const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({resolver: yupResolver(loginSchema),});
    const {setToken,setUsername} = useContext(AppContext);
	const [backendErrors,setBackendErrors] = useState('');
	const onSubmit = useCallback((formValues: ILoginForm) => {
		console.log(formValues);
		QuizmeApi.getAuthorization(formValues,'token')
			.then((data) => {
				console.log(data);
				setBackendErrors('');
				setUsername(data.username)
				setToken(data.token);
				history.push("/");
				window.responsiveVoice.speak(`Welcome to QuizMe, ${data.username}`,"US English Male");
			})
			.catch((err) => {
				if(!err.response){
					setBackendErrors('Network Error. Check your internet connection...');
				} else {
					if (err?.response?.status === 401) {
   						setBackendErrors('Invalid username/password');
  					}
				}
			});
  	}, [history, setToken, setUsername]);

	useEffect(()=> {
		logging.info(`Loading ${props.name}`)
	},[props.name,backendErrors])

	return (
		<div className="row mt2">
			<h3>L<img src={qlogo} alt="" width="30"/>gin</h3>
			{backendErrors && <span className="helper-text red-text left-align">{backendErrors}</span>}
			<form className="col s8" onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="input-field inline col s12">
						<input id="email" type="email" className="validate" placeholder="Email" defaultValue="" {...register("email")}/>
						<label htmlFor="email" className="active">Enter your email</label>
						{errors.email?.message && <span className="helper-text red-text left-align">{errors.email?.message}</span>}
					</div>
				</div>
				<div className="row">
					<div className="input-field inline col s12">
						<input id="password" type="password" className="validate" defaultValue="" {...register("password")} placeholder="Password"/>
						<label htmlFor="password" className="active">Enter your valid password</label>
					    {errors.password?.message && <span className="helper-text red-text left-align">{errors.password?.message}</span>}
					</div>
				</div>
				<button className="waves-effect waves-light btn purple darken-1"><i className="material-icons left">login</i>Login</button>
			</form>
  		</div>
	)
}

export default LoginPage;
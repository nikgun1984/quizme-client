import React, {useEffect,useCallback} from 'react';
import { Link } from 'react-router-dom';
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import { IRegisterForm } from '../interfaces/forms';
import {registerSchema} from '../validation/registerSchema';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


const RegisterPage: React.FC<IPage> = props => {

	const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>({resolver: yupResolver(registerSchema),});
    const onSubmit = useCallback((formValues: IRegisterForm) => {
    	console.log(formValues);
  	}, []);
	
	  async function signupUser() {
        // send "values" to database
    }

	useEffect(()=> {
		logging.info(`Loading ${props.name}`)
	},[props.name])
	return (
		<div className="row mt2">
			<h3>Register</h3>
			<form className="col s8" onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="input-field col s12">
						<input id="username" {...register("username")} type="text" defaultValue="" placeholder="Username"/>
						<label htmlFor="username" className="active">Enter your new username</label>
						{errors.username?.message && <span className="helper-text red-text left-align">{errors.username?.message}</span>}
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input id="email" {...register("email")} type="email" placeholder="Email"/>
						<label htmlFor="email" className="active">Enter your email</label>
						{errors.email?.message && <span className="helper-text red-text left-align">{errors.email?.message}</span>}
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input id="password" {...register("password")} type="password" placeholder="Password"/>
						<label htmlFor="password" className="active">Create your password</label>
						{errors.password?.message && <span className="helper-text red-text left-align">{errors.password?.message}</span>}
					</div>
				</div>
				<pre><Link to="/login">Already Registered? Signin</Link></pre>
				<button className="waves-effect waves-light btn purple darken-1"><i className="material-icons left">app_registration</i>Register</button>
			</form>
  		</div>
	)
}

export default RegisterPage;
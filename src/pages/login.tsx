import React, {useEffect} from 'react';
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import {useForm} from '../hooks/useForm';


const LoginPage: React.FC<IPage> = props => {
    const initialState = {
		username:'',
		password:''
	}

	const {handleOnChange,handleSubmitForm,formData} = useForm(signinUser,initialState);

	async function signinUser() {
        // send "values" to database
    }

	useEffect(()=> {
		logging.info(`Loading ${props.name}`)
	},[props.name])
	return (
		<div className="row mt2">
			<h3>Login Form</h3>
			<form className="col s8" onSubmit={handleSubmitForm}>
				<div className="row">
					<div className="input-field col s12">
					<input id="username_signin" type="text" className="validate" placeholder="Username" onChange={handleOnChange}/>
					<label htmlFor="username_signin" className="active">Enter your username</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input id="password_signin" type="password" className="validate" placeholder="Password" onChange={handleOnChange}/>
						<label htmlFor="password_signin" className="active">Enter your valid password</label>
					</div>
				</div>
				<button className="waves-effect waves-light btn purple darken-1"><i className="material-icons left">login</i>Login</button>
			</form>
  		</div>
	)
}

export default LoginPage;
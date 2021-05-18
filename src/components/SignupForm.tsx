import React from 'react';

const SignupForm: React.FC = () => {
	return (
		<div className="row mt2">
			<form className="col s8">
			<div className="row">
				<div className="input-field col s12">
				<input id="username" type="text" className="validate" placeholder="Username"/>
				<label htmlFor="username" className="active">Enter your new username</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
				<input id="email" type="email" className="validate" placeholder="Email"/>
				<label htmlFor="email" className="active">Enter your email</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
				<input id="password" type="password" className="validate" placeholder="Password"/>
				<label htmlFor="password" className="active">Create your password</label>
				</div>
			</div>
			<a href="/">Already Registered? Signin</a>
			</form>
  		</div>
	)
}

export default SignupForm;
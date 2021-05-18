import React from 'react';

const SigninForm: React.FC = () => {
	return (
		<div className="row mt2">
			<form className="col s8">
			<div className="row">
				<div className="input-field col s12">
				<input id="username" type="text" className="validate" placeholder="Username"/>
				<label htmlFor="username" className="active">Enter your username</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
				<input id="password" type="password" className="validate" placeholder="Password"/>
				<label htmlFor="password" className="active">Enter your valid password</label>
				</div>
			</div>
			</form>
  		</div>
	)
}

export default SigninForm;
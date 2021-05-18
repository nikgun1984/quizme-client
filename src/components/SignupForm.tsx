import {useForm} from '../hooks/useForm';

const SignupForm: React.FC = () => {
	const initialState = {
		username:'',
		email:'',
		password:''
	}

	const {handleOnChange,handleSubmitForm,formData} = useForm(signupUser,initialState);

	async function signupUser() {
        // send "values" to database
    }
    
	return (
		<div className="row mt2">
			<form className="col s8" onSubmit={handleSubmitForm}>
			<div className="row">
				<div className="input-field col s12">
				<input id="username" name="username" type="text" className="validate" placeholder="Username" onChange={handleOnChange}/>
				<label htmlFor="username" className="active">Enter your new username</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
				<input id="email" name="email" type="email" className="validate" placeholder="Email" onChange={handleOnChange}/>
				<label htmlFor="email" className="active">Enter your email</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
				<input id="password" name="password" type="password" className="validate" placeholder="Password" onChange={handleOnChange}/>
				<label htmlFor="password" className="active">Create your password</label>
				</div>
			</div>
			<pre><a href="/">Already Registered? Signin</a></pre>
			<button className="waves-effect waves-light btn purple darken-1"><i className="material-icons left">app_registration</i>Register</button>

			</form>
  		</div>
	)
}

export default SignupForm;
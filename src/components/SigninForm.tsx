import {useForm} from '../hooks/useForm';

const SigninForm: React.FC = () => {
	const initialState = {
		username:'',
		password:''
	}

	const {handleOnChange,handleSubmitForm,formData} = useForm(signinUser,initialState);

	async function signinUser() {
        // send "values" to database
    }

	return (
		<div className="row mt2">
			<form className="col s8" onSubmit={handleSubmitForm}>
			<div className="row">
				<div className="input-field col s12">
				<input id="username" type="text" className="validate" placeholder="Username" onChange={handleOnChange}/>
				<label htmlFor="username" className="active">Enter your username</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
				<input id="password" type="password" className="validate" placeholder="Password" onChange={handleOnChange}/>
				<label htmlFor="password" className="active">Enter your valid password</label>
				</div>
			</div>
			<button className="waves-effect waves-light btn purple darken-1"><i className="material-icons left">login</i>Login</button>

			</form>
  		</div>
	)
}

export default SigninForm;
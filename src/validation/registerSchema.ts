import * as Yup from 'yup';

export const registerSchema = 
	Yup.object().shape({
		email: Yup.string()
			.email("Enter a valid email")
			.required('Email is required'),
		username: Yup.string()
			.required('Username is required'),
		password: Yup.string()
		    .required(
				'Password is required'
			)
			.matches(
				/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/,
				"Please valid password. One uppercase, one lowercase, one special character and no spaces"
			)
			.min(8, 'Password is too short - should be 8 chars minimum.')
});
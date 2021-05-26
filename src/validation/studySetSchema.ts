import * as Yup from 'yup';

export const studySetSchema = 
	Yup.object().shape({
		title: Yup.string()
			.required('Title is required'),
		description: Yup.string()
			.required('Add description of your study set'),
});
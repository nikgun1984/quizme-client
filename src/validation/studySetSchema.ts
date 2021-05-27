import * as Yup from 'yup';

export const studySetSchema = 
	Yup.object().shape({
		title: Yup.string()
			.required('Title is required'),
		description: Yup.string()
			.required('Add description of your study set'),
		cards: Yup.array()
    		.of(Yup.object().shape({
        		term: Yup.string()
          			.ensure()
          			.required("Term is required"),
        		definition: Yup.string()
          			.required("Definition is required")
      		})
    		)
    		.min(2, "You need at least two cards")
});
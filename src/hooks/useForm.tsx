import {useState} from 'react';

export const useForm = (callback:any, initialState:{})=>{
	const [formData, setFormData] = useState(initialState);

	//onChange function
	const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const {name,value} = e.target;
		setFormData((fData: {})=>({
			...fData,
			[name]:value
		}))
	}

	//submit form
	const handleSubmitForm = async (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await callback();
	}

	return {
        handleOnChange,
        handleSubmitForm,
        formData,
    };
}
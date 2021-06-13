import { useParams } from "react-router-dom";
import EditForm from '../components/createset/EditForm';
import {ParamsType} from '../interfaces/types';
import {useStyles} from '../components/createset/styles';
import {IStudySet} from '../interfaces/studyset';
import { QuizmeApi } from '../api';
import { useHistory } from 'react-router';


const EditStudySet: React.FC = () => {
	const classes = useStyles();
	const { id } = useParams<ParamsType>();
    const history = useHistory();
    console.log(id);
	const onSubmit = (formValues: IStudySet) => {
		console.log('IM INSIDE HERE');
    	// console.log(formValues);
		// getLinks(formValues.cards);
        // console.log(formValues);
		// let formData = new FormData();
		// formData.append('title',formValues.title);
		// formData.append('description',formValues.description);
		// formData.append('cards',JSON.stringify(formValues));
		console.log(formValues);
		QuizmeApi.editStudyForm(formValues,id)
			.then((data) => {
				console.log(data)
				history.push('/studysets');
				window.location.reload();
			})
			.catch((err) => {
				console.log(err)
			});

	    // formValues.cards.forEach((card,idx)=>{
		// 	const reader = new FileReader();
		// 	let binaryImg;
		// 	console.log(card.img[0]);
		// 	reader.onloadend = () => {
        //     	binaryImg = reader.result;
		// 		console.log(binaryImg);
        // 	};
        //     reader.readAsDataURL(card.img[0]);
		// 	console.log(reader);
		// })
  	};

	return (
		<div className={classes.root}>
			<EditForm id={id} action='Edit Studyset' onSubmit={onSubmit}/>
    	</div>
	)
}

export default EditStudySet;
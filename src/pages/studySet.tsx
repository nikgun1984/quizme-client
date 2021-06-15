import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import { useForm, useFieldArray} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {studySetSchema} from '../validation/studySetSchema';
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import { useStyles } from '../components/createset/styles';
import {Grid,Box} from '@material-ui/core';
import {IStudySet} from '../interfaces/studyset';
import { QuizmeApi } from '../api';
import FlashCardForm from '../components/createset/FlashCardForm';
import { IStudySetResponse } from '../interfaces/apis';
// import {getLinks} from '../utilities/uploadImages';

const StudySetPage: React.FC<IPage> = props => {
    const history = useHistory();
    const classes = useStyles();
	const { register, watch,control,handleSubmit, formState: { errors } } = useForm<IStudySetResponse>({mode: "onChange",reValidateMode: "onChange",resolver: yupResolver(studySetSchema)});
    const {fields,append,remove} = useFieldArray({
		control,
		name: 'cards',
	})

	const onSubmit = (formValues: IStudySet) => {
    	// console.log(formValues);
		// getLinks(formValues.cards);
        // console.log(formValues);
		// let formData = new FormData();
		// formData.append('title',formValues.title);
		// formData.append('description',formValues.description);
		// formData.append('cards',JSON.stringify(formValues));
		console.log(formValues);
		QuizmeApi.createStudyForm(formValues,'')
			.then((data) => {
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

	const addCard = (e:React.SyntheticEvent): void => {
		e.preventDefault();
		append({})
	};

	//const createCard  = (): void => {
		// e.preventDefault();
		// console.log(fields)
		// const target= event.target as HTMLInputElement;
		// const file:File = (target.files as FileList)[0]; // to extract image file 
		// const fd = new FormData();
		// fd.append('image',file,file.name);
        // send "values" to database
    //}
	useEffect(()=> {
		logging.info(`Loading ${props.name}`)
	},[fields, props.name, watch]);
	return (
		<div className={classes.root}>
				<form className="mt4" onSubmit={handleSubmit(onSubmit)} >
					<Box m={5}>
					<Grid item container direction="column">
						<Grid item xs={12} container alignItems="center">
							<Grid item xs={6} lg={3}>
								<h6><b>Create a new study set</b></h6>
							</Grid>
							<Grid item lg={6}/>
							<Grid item xs={6} lg={3}>
								<button className="waves-effect waves-light btn purple darken-1" type="submit"><i className="material-icons left">app_registration</i>Create</button>
							</Grid>
						</Grid>
					</Grid>
					</Box>
  					<Grid container spacing={2} direction="column">
						<Grid item xs={12} lg={12}>			
							<div className="input-field">
								<input id="title" {...register("title")} type="text" className="validate" placeholder="Enter your title in here..." defaultValue="" />
								<label htmlFor="title" className="active">TITLE</label>
								{errors.title && <span className="helper-text red-text left-align">{errors.title.message}</span>}
							</div>
						</Grid>
						<Grid item xs={12} lg={12}>
							<div className="input-field">
								<input id="description" {...register("description")} type="text" className="validate" placeholder="Add a description" defaultValue=""/>
								<label htmlFor="description" className="active">DESCRIPTION</label>
								{errors.description && <span className="helper-text red-text left-align">{errors.description.message}</span>}
							</div>
						</Grid>
						{errors.cards && <span className="helper-text red-text">{(errors.cards as any).message}</span>}

						{fields.map((field,idx)=>{
							const watchFields = watch([`cards.${idx}.term`, `cards.${idx}.definition`]);
							return (
								<div key={field.id} className={classes.boxBorder}>
									<FlashCardForm control={control} idx={idx} errors={errors} watchFields={watchFields} remove={remove} fieldID=""/>
								</div>
							)
						})}
						<div className={classes.boxBorder}>
							<div className={classes.space}>
								<Grid item container spacing={4} justify="center">
									<Grid item xs={12} lg={3}>
										<div className={`${classes.paper} input-field`}>
											<button className="btn waves-effect waves-light purple darken-1" onClick={(e)=>addCard(e)}>Add Card<i className="material-icons left">add_box</i></button>
										</div>
									</Grid>
								</Grid>
							</div>
						</div>
					</Grid>
				</form>
    	</div>
	)
}

export default StudySetPage;
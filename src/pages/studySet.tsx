import React, {useEffect} from 'react';
import { useForm, useFieldArray} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {studySetSchema} from '../validation/studySetSchema';
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Grid,Box} from '@material-ui/core';
import {IStudySet} from '../interfaces/studyset';
import WordAutocomplete from '../components/WordAutocomplete';
import DefinitionAutocomplete from '../components/DefinitionAutocomplete';
import { QuizmeApi } from '../api';
import {getLinks} from '../utilities/uploadImages';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
	  marginTop: '2rem'
    },
    headerCreate: {
      textAlign: 'left',
    },
	headerButton: {
      textAlign: 'right',
    },
	textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
	inputField:{
		margin: 8,
	},
	paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
	boxBorder: {
		borderWidth: '1px',
		borderStyle: 'dashed',
		borderRadius: '20px',
		marginTop:'1rem',
		marginBottom:'1rem'
	},
	space: {
		padding:'1rem'
	},
	display: {
		display: 'none'
	}
  }),
);


const StudySetPage: React.FC<IPage> = props => {

    const classes = useStyles();
	const { register, watch,control,handleSubmit, formState: { errors }, getValues } = useForm({mode: "onChange",reValidateMode: "onChange",resolver: yupResolver(studySetSchema),});
    const {fields,append,remove} = useFieldArray({
		control,
		name: 'cards',
	})


	function sleep(delay = 0) {
  		return new Promise((resolve) => {
    		setTimeout(resolve, delay);
 		 });
	}

	const onSubmit = (formValues: IStudySet) => {
		console.log('IM INSIDE HERE');
    	console.log(formValues);
		getLinks(formValues.cards);
        console.log(formValues);
		// let formData = new FormData();
		// formData.append('title',formValues.title);
		// formData.append('description',formValues.description);
		// formData.append('cards',JSON.stringify(formValues));
		QuizmeApi.createStudyForm(JSON.stringify({data:formValues}),'')
			.then((data) => {
				console.log(data)
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
		console.log(fields);
		append({})
	};

	const createCard  = (): void => {
		// e.preventDefault();
		// console.log(fields)
		// const target= event.target as HTMLInputElement;
		// const file:File = (target.files as FileList)[0]; // to extract image file 
		// const fd = new FormData();
		// fd.append('image',file,file.name);
        // send "values" to database
    }
	useEffect(()=> {
		logging.info(`Loading ${props.name}`)
		console.log(watch);
		console.log(fields);
	},[fields, props.name, watch]);
	return (
		<div className={classes.root}>
				<form className="mt4" onSubmit={handleSubmit(onSubmit)}>
					<Box m={5}>
					<Grid item direction="column">
							<Grid item xs={12} container>
							<Grid item xs={6} lg={3}>
								<h6>Create a new study set</h6> 
							</Grid>
							<Grid item lg={6}/>
							<Grid item xs={6} lg={3}>
								<button className="waves-effect waves-light btn purple darken-1" type="submit"><i className="material-icons left">app_registration</i>Create</button>
								{/* <button
        type="button"
        onClick={() => {
          const values = getValues(); // { test: "test-input", test1: "test1-input" }
          console.log(values)
        }}
      >
        Get Values
      </button> */}
							</Grid>
						</Grid>
					</Grid>
					</Box>
  					<Grid container spacing={2} direction="column">
						<Grid item xs={12} lg={12}>			
							<div className="input-field">
								<input id="title" {...register("title")} type="text" className="validate" placeholder="Enter your title in here..." defaultValue="" />
								<label htmlFor="title" className="active">TITLE</label>
								{errors.title?.message && <span className="helper-text red-text left-align">{errors.title?.message}</span>}
							</div>
						</Grid>
						<Grid item xs={12} lg={12}>
							<div className="input-field">
								<input id="description" {...register("description")} type="text" className="validate" placeholder="Add a description" defaultValue=""/>
								<label htmlFor="description" className="active">DESCRIPTION</label>
								{errors.description?.message && <span className="helper-text red-text left-align">{errors.description?.message}</span>}
							</div>
						</Grid>
						{errors.cards?.message && <span className="helper-text red-text">{errors.cards?.message}</span>}

						{fields.map((field,idx)=>{
							const watchFields = watch([`cards.${idx}.term`, `cards.${idx}.definition`]);
							console.log(watchFields);
							return (
								<div key={field.id} className={classes.boxBorder}>
									<div className={classes.space}>
										<p>{`FLASHCARD#${idx+1}`}</p>
										<Grid item container spacing={2} alignItems="center" justify="center">
											<Grid item xs={12} lg={3}>
												<WordAutocomplete control={control} name ={`cards.${idx}.term`} errors={errors} idx={idx}/>
												 {/* {watchFields[0] && <button onClick={(e)=>mousePressedEvent(e,watchFields[0])}><span className="material-icons">volume_up</span></button>} */}
											</Grid>
											<Grid item xs={12} lg={4}>
												<div className="input-field">
													<DefinitionAutocomplete word={watchFields[0]} control={control} name ={`cards.${idx}.definition`} errors={errors} idx={idx}/>
													{/* {watchFields[1] && <button onClick={(e)=>mousePressedEvent(e,watchFields[0])}><span className="material-icons">volume_up</span></button>} */}
            									</div>
											</Grid>
											<Grid item xs={12} lg={3}>
												{/* <div className={`${classes.paper} input-field`}>
													<input type="file" className="validate" id="file" {...register(`cards.${idx}.img` as const)} />
													<label htmlFor="file" className="active">IMAGE</label>
												</div> */}
												<div className="file-field input-field">
													<div className="btn purple darken-1">
														<span>Image</span>
														<input type="file" id="file" {...register(`cards.${idx}.img` as const)}/>
													</div>
													<div className="file-path-wrapper">
														<input className="file-path validate" type="text" value="uploaded"/>
													</div>
												</div>
											</Grid>
											<Grid item xs={12} lg={1}>
												<div className={`${classes.paper} input-field`}>
													<button type="button" onClick={()=> remove(idx)}><span className="material-icons align-center">delete</span></button>
												</div>
											</Grid>
										</Grid>
									</div>
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
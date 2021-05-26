import React, {useEffect, useCallback} from 'react';
import { useForm, useWatch, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {studySetSchema} from '../validation/studySetSchema';
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Grid,Paper, Box} from '@material-ui/core';
import {IStudySet} from '../interfaces/studyset';


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
	const { register, control,handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(studySetSchema),});
    const {fields,append,remove} = useFieldArray({
		control,
		name: 'cards',
	})
	const onSubmit = useCallback((formValues: IStudySet) => {
    	console.log(formValues);
  	}, []);

	const addCard = (e:React.SyntheticEvent): void => {
		e.preventDefault();
		append({})
	};

	const createCard  = (e:React.SyntheticEvent): void => {
		e.preventDefault();
		console.log(fields)
		// const target= event.target as HTMLInputElement;
		// const file:File = (target.files as FileList)[0]; // to extract image file 
		// const fd = new FormData();
		// fd.append('image',file,file.name);
        // send "values" to database
    }
	useEffect(()=> {
		logging.info(`Loading ${props.name}`)
	},[props.name])
	return (
		<div className={classes.root}>
				<form className="mt4" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
					<Box m={5}>
					<Grid item direction="column">
							<Grid item xs={12} container>
							<Grid item xs={6} lg={3}>
								<h6>Create a new study set</h6> 
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
						<p>Please add at least 2 flash cards</p>

						{fields.map(({id},idx)=>{
							return (
								<div key={id} className={classes.boxBorder}>
									<div className={classes.space}>
										<p>{`FLASHCARD#${idx+1}`}</p>
										<Grid item container spacing={4}>
											<Grid item xs={12} lg={4}>
												<Paper className={`${classes.paper} input-field`}>
													<input id="term" {...register(`cards.${idx}.term`)} type="text" className="validate" placeholder="Enter term" defaultValue=""/>
													<label htmlFor="term" className="active">TERM</label>
												</Paper>
											</Grid>
						
											<Grid item xs={12} lg={4}>
												<Paper className={`${classes.paper} input-field`}>
													<input id="definition" {...register(`cards.${idx}.definition` as const)} type="text" placeholder="Enter definition" defaultValue=""/>
													<label htmlFor="definition" className="active">DEFINITION</label>
												</Paper>
											</Grid>
											<Grid item xs={12} lg={2}>
												<Paper className={`${classes.paper} input-field`}>
													<input type="file" className={`validate ${classes.display}`} id="file" {...register(`cards.${idx}.img` as const)} defaultValue="" accept=".jpeg, .png"/>
													<button onClick={createCard}><span className="material-icons">upload</span></button>
													<label htmlFor="file" className="active">IMAGE</label>
												</Paper>
											</Grid>
											<Grid item xs={12} lg={2}>
												<Paper className={`${classes.paper} input-field`}>
													<button type="button" onClick={()=> remove(idx)}><span className="material-icons align-center">delete</span></button>
												</Paper>
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
										<Paper className={`${classes.paper} input-field`}>
											<button className="btn waves-effect waves-light purple darken-1" onClick={(e)=>addCard(e)}>Add Card<i className="material-icons left">add_box</i></button>
										</Paper>
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
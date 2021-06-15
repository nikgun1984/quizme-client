import {useSelector} from "react-redux";
import { RootStore } from '../../state/store';
import {IEditSet} from '../../interfaces/studyset';
import {Grid,Box} from '@material-ui/core';
import {useStyles} from './styles';
import {useEffect} from 'react';
import { useForm, useFieldArray} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {studySetSchema} from '../../validation/studySetSchema';
import FlashCardForm from './FlashCardForm';
import { IStudySetResponse } from "../../interfaces/apis";


const EditForm: React.FC<IEditSet> = ({id, action, onSubmit}) => {
	const classes = useStyles();
	const studysets = useSelector((state: RootStore) => state.studysets.studysets);
	const set = studysets?.filter(el=>+el.id === +id)[0];
	const { register, watch,control,handleSubmit, formState: { errors }, reset } = useForm<IStudySetResponse>({mode: "onChange",reValidateMode: "onChange",resolver: yupResolver(studySetSchema),defaultValues: {
		id: id,
		title: '',
		description:'',
		username: '',
		cards: [...set?set.cards:[]]
	}});
    const {fields,append,remove} = useFieldArray({
		control,
		name: 'cards',
	})
	const addCard = (e:React.SyntheticEvent): void => {
		e.preventDefault();
		append({})
	};

	const removeCard = (idx:number) => {
		// await QuizmeApi.removeFlashcard(fieldID)
		// 	.then((data) => {
		// 		console.log(data)
		// 		if(data) setIsDeleted(`Flashcard has been deleted...`);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err)
		// 	});
		remove(idx);
	}

	useEffect(()=>{
		if(set){
			reset(set)
		}
  	},[set]);

	return (
			<form className="mt4" onSubmit={handleSubmit(onSubmit)} >
				<Box m={5}>
				<Grid item container direction="column">
						<Grid item xs={12} container>
						<Grid item xs={6} lg={3}>
							<h6><b>{action}</b></h6> 
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
							<input id="title" {...register("title")} type="text" className="validate" placeholder="Enter your title in here..."  />
							<label htmlFor="title" className="active">TITLE</label>
							{errors.title && <span className="helper-text red-text left-align">{errors.title.message}</span>}
						</div>
					</Grid>
					<Grid item xs={12} lg={12}>
						<div className="input-field">
							<input id="description" {...register("description")} type="text" className="validate" placeholder="Add a description"/>
							<label htmlFor="description" className="active">DESCRIPTION</label>
							{errors.description && <span className="helper-text red-text left-align">{errors.description.message}</span>}
						</div>
					</Grid>
					{errors.cards && <span className="helper-text red-text">{(errors.cards as any).message}</span>}
					{   
						fields.map((field,idx)=>{
						const watchFields = watch([`cards.${idx}.term`, `cards.${idx}.definition`]);
						return (
							<div key={field.id} className={classes.boxBorder}>
								<FlashCardForm control={control} idx={idx} errors={errors} watchFields={watchFields} remove={removeCard} card={set?.cards[idx]} fieldID={field.id}/>
							</div>
						)
					})
					}
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
	)
}

export default EditForm;
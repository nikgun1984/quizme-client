import {useSelector} from "react-redux";
import { RootStore } from '../../state/store';
import {IEditSet} from '../../interfaces/studyset';
import {Grid,Box} from '@material-ui/core';
import {useStyles} from './styles';
import {useState,useEffect} from 'react';
import { useForm, useFieldArray} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {studySetSchema} from '../../validation/studySetSchema';
import FlashCardForm from './FlashCardForm';
import { IStudySetResponse } from "../../interfaces/apis";

const EditForm: React.FC<IEditSet> = ({id, action, onSubmit}) => {
	const defaultValues = {
		id: id,
		title: '',
		description:'',
		username: '',
		cards: []
	}
	const classes = useStyles();
	const studysets = useSelector((state: RootStore) => state.studysets.studysets);
	const set = studysets?.filter(el=>+el.id === +id)[0];
    const [studyset,setStudyset] = useState<IStudySetResponse>(defaultValues);
	const { register, watch,control,handleSubmit, formState: { errors } } = useForm({mode: "onChange",reValidateMode: "onChange",resolver: yupResolver(studySetSchema),});
    const {fields,append,remove} = useFieldArray({
		control,
		name: 'cards',
	})
	const addCard = (e:React.SyntheticEvent): void => {
		e.preventDefault();
		console.log(fields);
		append({})
	};

	useEffect(()=>{
		if(set){
			setStudyset(set);
		}
  	},[set]);

	return (
			<form className="mt4" onSubmit={handleSubmit(onSubmit)} >
				<Box m={5}>
				<Grid item direction="column">
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
							<input id="title" {...register("title")} type="text" className="validate" placeholder="Enter your title in here..." defaultValue={studyset.title} />
							<label htmlFor="title" className="active">TITLE</label>
							{errors.title?.message && <span className="helper-text red-text left-align">{errors.title?.message}</span>}
						</div>
					</Grid>
					<Grid item xs={12} lg={12}>
						<div className="input-field">
							<input id="description" {...register("description")} type="text" className="validate" placeholder="Add a description" defaultValue={studyset.description}/>
							<label htmlFor="description" className="active">DESCRIPTION</label>
							{errors.description?.message && <span className="helper-text red-text left-align">{errors.description?.message}</span>}
						</div>
					</Grid>
					{errors.cards?.message && <span className="helper-text red-text">{errors.cards?.message}</span>}
					{
						studyset.cards.map((field,idx)=>{
						const watchFields = watch([`cards.${idx}.term`, `cards.${idx}.definition`]);
						return (
							<div key={field.id} className={classes.boxBorder}>
								<FlashCardForm control={control} idx={idx} errors={errors} watchFields={watchFields} register={register} remove={remove} card={studyset.cards[idx]}/>
							</div>
						)
					})
					}
					{fields.map((field,idx)=>{
						const watchFields = watch([`cards.${idx}.term`, `cards.${idx}.definition`]);
						return (
							<div key={field.id} className={classes.boxBorder}>
								<FlashCardForm control={control} idx={idx} errors={errors} watchFields={watchFields} register={register} remove={remove} card={studyset.cards[idx]}/>
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
	)
}

export default EditForm;
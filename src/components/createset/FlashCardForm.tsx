import WordAutocomplete from '../WordAutocomplete';
import DefinitionAutocomplete from '../DefinitionAutocomplete';
import {Grid} from '@material-ui/core';
import {useStyles} from './styles';
import {IFlashCardForm} from '../../interfaces/forms';
import { useState,useEffect } from 'react';
import { QuizmeApi } from '../../api';
import { useDispatch } from "react-redux";
import {deleteFlashCard} from '../../state/actions/studysetActions';


const FlashCardForm:React.FC<IFlashCardForm> = ({control,idx,errors,watchFields,remove,card,fieldID,setIsDeleted}) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [submitting, setSubmitting] = useState(false);

	useEffect(()=>{
		let timer: NodeJS.Timeout;
		const removeCard = (idx:number,idSet:number) => {
			QuizmeApi.removeFlashcard(fieldID)
				.then((data) => {
					setSubmitting(false)
					if(data) setIsDeleted &&  setIsDeleted('Flashcard has been deleted...');
					timer = setTimeout(() => {
						setIsDeleted && setIsDeleted('')
					}, 5000);
				})
				.catch((err) => {
					console.log(err)
				});
			dispatch(deleteFlashCard(idx,idSet));
		}
		if(submitting && card){
			console.log(card.id);
			console.log(typeof card.id)
			if(card.id === "number"){
				remove(idx);
				removeCard(+card.id,+card.studyset_id);
			} else {
				remove(idx);
			}
		}
		return () => clearTimeout(timer);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[submitting])
	return (
		<div className={classes.space}>
			<p>{`FLASHCARD#${idx+1}`}</p>
			<Grid item container spacing={2} alignItems="center" justify="center">
				<Grid item xs={12} lg={3}>
					<WordAutocomplete control={control} name ={`cards.${idx}.term`} errors={errors} idx={idx} value={card?.term!}/>
						{/* {watchFields[0] && <button onClick={(e)=>mousePressedEvent(e,watchFields[0])}><span className="material-icons">volume_up</span></button>} */}
				</Grid>
				<Grid item xs={12} lg={4}>
					<div className="input-field">
						<DefinitionAutocomplete word={watchFields[0]} control={control} name ={`cards.${idx}.definition`} errors={errors} idx={idx} value={card?card.definition: ""}/>
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
							{/* <input type="file" id="file" {...register(`cards.${idx}.img` as const)}/> */}
						</div>
						<div className="file-path-wrapper">
							<input className="file-path validate" type="text" value="uploaded" disabled/>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} lg={1}>
					<div className={`${classes.paper} input-field`}>
						<button type="button" onClick={() => setSubmitting(true)}><span className="material-icons align-center">delete</span></button>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default FlashCardForm;




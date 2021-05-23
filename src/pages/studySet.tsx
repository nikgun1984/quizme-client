import React, {useEffect, useState} from 'react';
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import {useForm} from '../hooks/useForm';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Card} from '../components/Card';
import {AddCard} from '../components/AddCard';

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
  }),
);


const StudySetPage: React.FC<IPage> = props => {
	const initialState = {
		title:'',
		description:'',
		image: '',
		cards: []
	}
    const classes = useStyles();
    const [count,setCount] = useState(2);
	const addCard = () => {
		setCount(card=>card+1);
	}
	const {handleOnChange,handleSubmitForm,formData} = useForm(signupUser,initialState);
	// for refs : const ref = useRef<HTMLInputElement>(null);
	// then ref.current!.value <--- means it will never be null to ignore warning
	async function signupUser() {
        // send "values" to database
    }
	useEffect(()=> {
		logging.info(`Loading ${props.name}`)
	},[props.name])
	return (
		<div className={classes.root}>
			<Grid container spacing={2} direction="column">
				<Grid item xs={12} container>
					<Grid item xs={6} lg={3}>
						<h6>Create a new study set</h6> 
					</Grid>
					<Grid item lg={6}/>
					<Grid item xs={6} lg={3}>
						<button className="waves-effect waves-light btn purple darken-1"><i className="material-icons left">app_registration</i>Create</button>
					</Grid>
				</Grid>
			</Grid>
			<Grid container spacing={2} direction="column">
				<form className="mt4" onSubmit={handleSubmitForm} >
					<Grid item xs={12} lg={12}>
						<div className="input-field">
							<input id="title" name="title" type="text" className="validate" placeholder="Enter your title in here..." />
							<label htmlFor="title" className="active">TITLE</label>
						</div>
					</Grid>
					<Grid item xs={12} lg={12}>
						<div className="input-field">
							<input id="description" name="description" type="text" className="validate" placeholder="Add a description"/>
							<label htmlFor="description" className="active">DESCRIPTION</label>
						</div>
					</Grid>
					<Card count={1}/>
					<Card count={2}/>
					<AddCard addCard = {addCard} />
				</form>
			</Grid>
    	</div>
	)
}

export default StudySetPage;
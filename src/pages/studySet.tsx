import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import {useForm} from '../hooks/useForm';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from '../themes/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
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
				<Grid item xs={12} container alignItems="center">
					<Grid item xs={4}>
						<h6>Create a new study set</h6> 
					</Grid>
					<Grid item xs={4}/>
					<Grid item xs={4}>
						<button className="waves-effect waves-light btn purple darken-1"><i className="material-icons left">app_registration</i>Create</button>
					</Grid>
				</Grid>
			</Grid>
			<Grid container spacing={2} direction="column" lg={6} xs={12}>
					<form className="col s12 mt4" onSubmit={handleSubmitForm}>
						<div className="row">
							<div className="input-field col s12">
							<input id="title" name="title" type="text" className="validate" placeholder="Enter your title in here..." />
							<label htmlFor="title" className="active">TITLE</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="description" name="description" type="text" className="validate" placeholder="Add a description"/>
								<label htmlFor="description" className="active">DESCRIPTION</label>
							</div>
						</div>
					</form>
            </Grid>
    	</div>
	)
}

export default StudySetPage;
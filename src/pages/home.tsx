import React, {useEffect, useState,useContext} from 'react';
import { useHistory } from "react-router";
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import WordOftheDay from '../components/WordOftheDay';
import {Grid,Box, Typography} from '@material-ui/core';
import AppContext from "../appContext";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import logo from '../logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0),
    },
	image: {
		filter: "brightness(0)",
		width: 150,
		margin:0
	},
	margin: {
		marginTop: "2rem",
		marginBottom: "2rem"
	},
	marginBottom: {
		marginBottom: "4rem"
	}
  }),
);

const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
	const classes = useStyles();
	const [, setMessage] = useState<string>('');
	const {username} = useContext(AppContext);
	const history = useHistory();
	const handleClick = () => {
    	history.push('/studysets');
  	}
	useEffect(()=> {
		logging.info(`Loading ${props.name}`);
		let number = props.match.params.number;
		number?setMessage(`The number is ${number}`):setMessage('No number was provided...');
	},[props.match.params.number, props.name])
	return (
		<Box m={5}>
			<Grid container justify="center" alignItems="center" className={classes.marginBottom}>
				<Grid item xs={12}>
					<Typography variant="h3" component="h3" className={classes.root}>
						<em><strong>Welcome to <img className={classes.image} src={logo} alt="" /> {username}! </strong></em>
					</Typography>
				</Grid>
			</Grid>
			<hr className={classes.margin}/>
			<Grid item xs={12} container justify="center" alignItems="center">
				<Grid item xs={12} lg={6}>
					<Typography variant="h5" component="h5" className={classes.root}>
						<em><strong>Create Flashcards, Learn and Play</strong></em>
					</Typography>
				</Grid>
				<Grid container item xs={12} lg={6} alignItems="center" justify="center">
					<Grid item ></Grid>
					<WordOftheDay />
				</Grid>
			</Grid>
			<hr className={classes.margin}/>
			{username &&
				<Grid container alignItems="flex-start">
					<Grid item xs={12}>
						<div className="input-field">
							<button className="btn waves-effect waves-light purple darken-1 mt4" onClick={handleClick}>Start Studying<i className="material-icons left">border_color</i></button>
						</div>
					</Grid>
				</Grid>
			}
		</Box>
	)
}

export default withRouter(HomePage);
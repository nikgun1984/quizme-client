import React, {useEffect, useState} from 'react';
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import WordOftheDay from '../components/WordOftheDay';
import {Grid,Box} from '@material-ui/core';

const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
	const [, setMessage] = useState<string>('')
	useEffect(()=> {
		logging.info(`Loading ${props.name}`);
		let number = props.match.params.number;
		number?setMessage(`The number is ${number}`):setMessage('No number was provided...');
	},[props.match.params.number, props.name])
	return (
		<>
			<h1>Welcome to the application!!!</h1>
			<Box m={5}>
					<Grid item direction="column">
							<Grid item xs={12} container>
							<Grid item xs={6} lg={3}>
								
							</Grid>
							<Grid item lg={6}/>
							<Grid item xs={12} lg={3}>
								<WordOftheDay />
							</Grid>
						</Grid>
					</Grid>
					</Box>
		</>
	)
}

export default withRouter(HomePage);
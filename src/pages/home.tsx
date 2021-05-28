import React, {useEffect, useState} from 'react';
import IPage from '../interfaces/page';
import logging from'../configs/logging';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
	const [, setMessage] = useState<string>('')
	useEffect(()=> {
		logging.info(`Loading ${props.name}`);
		let number = props.match.params.number;
		number?setMessage(`The number is ${number}`):setMessage('No number was provided...');
	},[props.match.params.number, props.name])
	return (
		<h1>Welcome to the application!!!</h1>
	)
}

export default withRouter(HomePage);
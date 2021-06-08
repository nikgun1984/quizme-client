import {useParams} from 'react-router-dom';
import {useState} from 'react';
import Quizme from '../components/quiz/Quizme';
import {Grid, Button} from '@material-ui/core/';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {useStyles} from '../components/quiz/useStyles';
import {ParamsType} from '../interfaces/types';


const QuizPage: React.FC = () => {
	const classes = useStyles();
	const { id } = useParams<ParamsType>();
	const [hidden,setHidden] = useState<boolean>(false);
	return (
		<>
			<h5 className="mt4 mb4"><b>Quiz</b></h5>
			{!hidden && <Grid container className={classes.root} spacing={2}>
				<Grid item xs={12}>
					<pre>
						<b>Instructions:</b> Quiz has to be completed in one sitting. You will have
						30 seconds to complete each question. Please DO NOT REFRESH your 
						page while taking a test otherwise all info
						will be lost.
					</pre>
				</Grid>
				<Grid item xs={12}>
					<h6><b>Good luck!!!</b></h6>
				</Grid>
				<Grid item xs={12}>
					<div className="input-field">
						<button className="btn waves-effect waves-light purple darken-1" onClick={()=>setHidden(flag=>!flag)}>Start Your Quiz!!!<i className="material-icons left">arrow_forward</i></button>
					</div>
				</Grid>
			</Grid>}
			{hidden && <Quizme id={id}/>}
		</>
	)
}

export default  QuizPage;
import {Grid} from '@material-ui/core/';
import {QuizResType} from '../../interfaces/types';
import { useDispatch } from 'react-redux';
import {Dispatch} from 'redux';
import {setWinner} from '../../state/actions/winnerActions';
import { useHistory } from 'react-router';


const QuizResult:React.FC<QuizResType> = ({correct,total}) => {
	const history = useHistory();
	const dispatch:Dispatch<any> = useDispatch();
	const handleClick = () =>{
		dispatch(setWinner());
		history.push('/studysets');
	}
	return (
		<Grid container>
			<Grid item xs={12}>
				<h3>You made it!!!</h3>
				<h6>Quiz Results</h6>
			</Grid>
			<Grid item xs={12}>
				<pre>
					{`Your Score: ${Math.floor(correct*100/total)}%`}
				</pre>
			</Grid>
			{correct!==total && <Grid item xs={12}>
				<h6>Keep studying</h6>
				<pre>
					{`You missed ${total-correct} out of ${total} questions`}
				</pre>
			</Grid>
			}
			{correct===total && <Grid item xs={12}>
				<h6>Awesome job!!! I knew you have it in you!!!</h6>
			</Grid>
			}
			<Grid item xs={12}>
				<div className="input-field">
					<button className="btn waves-effect waves-light purple darken-1" onClick={handleClick}>Back to Your Studysets<i className="material-icons left">arrow_back</i></button>
				</div>
			</Grid>
		</Grid>
	)
}

export default QuizResult;
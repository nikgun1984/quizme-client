import {Grid} from '@material-ui/core/';
import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Dispatch} from 'redux';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { RootStore } from '../../state/store';
import { IResponseFlashCard } from "../../interfaces/apis";
import { ParamsType } from "../../interfaces/types";
import {useStyles} from './useStyles';
import {shuffle} from '../../utilities/shuffleCards';
import {renderTime} from '../../utilities/renderTime';
import Question from './Question';
import QuizResult from "./QuizResult";
import LinearWithValueLabel from '../linearprogressbar/LinearWithValueLabel';
import {setWinner} from '../../state/actions/winnerActions';

const Quizme:React.FC<ParamsType> = ({id}) => {
	const classes = useStyles();
	const dispatch:Dispatch<any> = useDispatch();
	const studysets = useSelector((state: RootStore) => state.studysets.studysets);
	const cards = studysets?.filter(el=>+el.id === +id)[0].cards;

	const [flashcards,setFlashcards] = useState<IResponseFlashCard[]>([]);
	const [progress, setProgress] = useState(0);
	const [total,setTotal] = useState<number>(0);
	const [count,setCount] = useState<number>(0);
	const [correct,setCorrect] = useState<number>(0);
	const [time,setTime] = useState<number>(0);

  // Progress Bar handler for Next Button
  const handleClickNext = () => {
	setCount(count=>count+1);
	setTime(time=>time+1);
	if(count<flashcards.length-1){
		let itemPercent = cards?Math.floor(100/cards.length):0;
        setProgress(progress=>progress+itemPercent);
	} else if(count+1===flashcards.length) {
		setProgress(100);
		if(correct===total){
			dispatch(setWinner())
		}
	}
  }
  
  /* Make sure load our values for total and progress due to async behavior of useSelect */
  useEffect(()=>{
    if(cards){
      setFlashcards(shuffle<IResponseFlashCard>(cards));
	  setTotal(cards.length);
    }
  },[cards])
	return (
		<>
		{count!==flashcards.length && 
			<Grid container>
				<Grid container justify="center">
					<Grid item>
						<CountdownCircleTimer
							isPlaying
							size={80}
							duration={10}
							key={time}
							colors={[
								["#8e24aa", 0.25],
								["#7b1fa2", 0.25],
								["#6a1b9a", 0.25],
								["#4a148c", 0.25]
							]}
							onComplete={() => {
								handleClickNext();
								return [true, 1000];
							}}
						>
						{renderTime}
						</CountdownCircleTimer>
					</Grid>
				</Grid>
			</Grid>
		}

		<Grid container className={classes.root} spacing={2}>
			{	count!==flashcards.length && 
				<Grid item xs={12}>
					<pre>
						Question {count+1}:
					</pre>
				</Grid>
			}

			<Grid item xs={12} className={classes.quizOptions}>
				{
					count!==flashcards.length && flashcards.map((card,idx)=>{
						return (
							<div key={idx} className={idx === count ? classes.optionsActive : classes.options}>
								{idx===count && <Question setCorrect={setCorrect} index={idx} flashcards={flashcards}/>}
							</div>
						)
					})
				}
				{
					count===flashcards.length && <QuizResult correct={correct} total={flashcards.length}/>
				}
			</Grid>
			<Grid container justify="center">
				<Grid item lg={5} xs={12}>
					<LinearWithValueLabel progress={progress} count={count} total={total}/>
				</Grid>
		   </Grid>
		   {count!==flashcards.length && 
			<Grid item xs={12}>
				<div className="input-field">
					<button className="btn waves-effect waves-light purple darken-1" onClick={handleClickNext}>Next<i className="material-icons left">arrow_forward</i></button>
				</div>
			</Grid>
		   }
		</Grid>
	</>
	)
}

export default Quizme;
import { ParamsType } from "../../interfaces/types";
import {Grid} from '@material-ui/core/';
import {useStyles} from './useStyles';
import {useState,useEffect, MouseEvent} from 'react';
import LinearWithValueLabel from '../linearprogressbar/LinearWithValueLabel';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {renderTime} from '../../utilities/renderTime';
import {useSelector} from "react-redux";
import { RootStore } from '../../state/store';
import { IResponseFlashCard } from "../../interfaces/apis";
import {shuffle} from '../../utilities/shuffleCards';
import Question from './Question';
import QuizResult from "./QuizResult";
import {IWinnerState} from '../../interfaces/reducers';
import {setWinner} from '../../state/actions/winnerActions';
import { useDispatch } from 'react-redux';
import {Dispatch} from 'redux';

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

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue((event.target as HTMLInputElement).value);
//   };

  // Progress Bar handler for Next Button
  const handleClickNext = (e:MouseEvent) => {
	e.preventDefault();
	setCount(count=>count+1);
	if(count<flashcards.length-1){
		let itemPercent = cards?Math.floor(100/cards.length):0;
        setProgress(progress=>progress+itemPercent);
	} else if(count+1===flashcards.length) {
		console.log('in here')
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
	console.log(correct)
  },[cards,count])
	return (
		<>
		{count!==flashcards.length && 
			<Grid container>
				<Grid container justify="center">
					<Grid item>
						<CountdownCircleTimer
							isPlaying
							size={80}
							duration={30}
							colors={[
								["#8e24aa", 0.25],
								["#7b1fa2", 0.25],
								["#6a1b9a", 0.25],
								["#4a148c", 0.25]
							]}
							onComplete={() => [true, 1000]}
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
			{/* <Grid item xs={12}>
				<h6><b>Good luck!!!</b></h6>
			</Grid> */}
			<Grid item xs={12} className={classes.quizOptions}>
				{
					count!==flashcards.length && flashcards.map((card,idx)=>{
						return (
							<div key={idx} className={idx === count ? classes.optionsActive : classes.options}>
								{idx===count && <Question setCorrect={setCorrect} correct={correct} index={idx} flashcards={flashcards}/>}
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
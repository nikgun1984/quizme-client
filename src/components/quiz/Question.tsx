import {QuestionType} from '../../interfaces/types';
import {Grid, FormControlLabel,FormControl,RadioGroup,Radio} from '@material-ui/core/';
import {useState,useEffect} from 'react';
import {createOptionArray} from '../../utilities/shuffleCards';

const Question:React.FC<QuestionType> = ({setCorrect,index,flashcards}) => {
	const [randIdx, setRandIdx] = useState<number[] |  undefined>([]);
	useEffect(()=>{
		if(flashcards){
			setRandIdx(createOptionArray(0,flashcards.length,index));
		}
	},[flashcards])
	return (
		<>
		<Grid item xs={12}>
					<pre>
						{flashcards[index].definition}
					</pre>
				</Grid>
			<FormControl component="fieldset">
				<RadioGroup aria-label="gender" name="gender1">
					{
						randIdx?.map((el)=>{
							return (
								<FormControlLabel value={flashcards[el].term} control={<Radio color="primary"/>} label={flashcards[el].term} />
							)
						})
					}
				</RadioGroup>
			</FormControl>
		</>
	)
}

export default Question;

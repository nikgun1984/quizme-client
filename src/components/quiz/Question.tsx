import {QuestionType} from '../../interfaces/types';
import {Grid, FormControlLabel,FormControl,RadioGroup,Radio} from '@material-ui/core/';
import {useState,useEffect} from 'react';
import {createOptionArray} from '../../utilities/shuffleCards';

const Question:React.FC<QuestionType> = ({setCorrect,correct,index,flashcards}) => {
	const [randIdx,setRandIdx] = useState(()=>{
		return createOptionArray(flashcards.length,index);
	})
	const [value, setValue] = useState({});
	const [flag,setFlag] = useState(false);
    console.log(randIdx)
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target as HTMLInputElement;
    	setValue({[name]: value});
		console.log(flashcards[index].term)
		console.log(value)
		console.log(value === flashcards[index].term);
		if(flag){
			setCorrect(points=>points-1);
			setFlag(false);
		}
		if(value === flashcards[index].term  && !flag) {
			setCorrect(points=>points+1);
			setFlag(true)
		}
    };

	return (
		<>
		<Grid item xs={12}>
					<pre>
						{flashcards[index].definition}
					</pre>
				</Grid>
			<FormControl component="fieldset">
				<RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
					{
						randIdx?.map((el)=>{
							return (
								<FormControlLabel name={flashcards[el].term} value={flashcards[el].term}  control={<Radio color="primary"/>} label={flashcards[el].term} />
							)
						})
					}
				</RadioGroup>
			</FormControl>
		</>
	)
}

export default Question;

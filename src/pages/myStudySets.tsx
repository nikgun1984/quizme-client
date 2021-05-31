import {useState,useEffect} from 'react';
import {IStudySet} from '../interfaces/studyset';
import {Grid,Box} from '@material-ui/core';

const MyStudySets = () => {
	const [studysets, setStudysets] = useState<IStudySet[]>([]);

	useEffect(()=>{

	})
	return (
		<>
			<h5>My Studysets</h5>
			<Grid container item direction="column">

			</Grid>
			
		</>
	)
}

export default  MyStudySets;
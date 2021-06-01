import {useState,useEffect,useContext} from 'react';
import {IStudySet} from '../interfaces/studyset';
import {Grid,Box} from '@material-ui/core';
import StudySetCard from '../components/StudySetCard';
import { QuizmeApi } from '../api';
import AppContext from "../appContext";
import { v4 as uuidv4 } from 'uuid';

const MyStudySets = () => {
	const {username} = useContext(AppContext);
	const [studysets, setStudysets] = useState<IStudySet[]>([]);
    console.log(studysets)
	useEffect(()=>{
		const fetchData = async () => {
			const response = await QuizmeApi.getMyStudysets(username);
			try{
				console.log(response.studySets)
				setStudysets(response.studySets)
			}catch(err){
				console.log(err)
			}
		}
		fetchData();
	},[])
	return (
		<>
			<h5>My Studysets</h5>
			{
				studysets.map(studyset=>{
					return (
						<div key={uuidv4()} className="mt2">
							<StudySetCard count={studysets.length} title={studyset.title} description={studyset.description} username={username}/>
						</div>
					)
				})
			}
		</>
	)
}

export default  MyStudySets;
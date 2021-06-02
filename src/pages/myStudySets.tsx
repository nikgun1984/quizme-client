import {useState,useEffect,useContext} from 'react';
import StudySetCard from '../components/StudySetCard';
import { QuizmeApi } from '../api';
import AppContext from "../appContext";
import {IStudySetResponse} from '../interfaces/apis';

const MyStudySets = () => {
	const {username} = useContext(AppContext);
	const [studysets, setStudysets] = useState<IStudySetResponse[]>([]);
    console.log(studysets)
	useEffect(()=>{
		const fetchData = async () => {
			const response = await QuizmeApi.getMyStudysets(username);
			try{
				setStudysets(response)
			}catch(err){
				console.log(err)
			}
		}
		fetchData();
	},[username])
	return (
		<>
			<h5>My Studysets</h5>
			{
				studysets.map(studyset=>{
					return (
						<div key={studyset.id} className="mt2">
							<StudySetCard id={studyset.id} count={studyset.cards.length} title={studyset.title} description={studyset.description} username={username}/>
						</div>
					)
				})
			}
		</>
	)
}

export default  MyStudySets;
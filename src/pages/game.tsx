import {useState,useEffect,useContext} from 'react';
import {useParams} from 'react-router-dom';
import StudySetCard from '../components/StudySetCard';
import { QuizmeApi } from '../api';
import AppContext from "../appContext";
import {IStudySetResponse} from '../interfaces/apis';
import MemoryGame from '../components/games/MemoryGame';

type ParamTypes = {
	id: string
}

const GamePage: React.FC = () => {
	const { id } = useParams<ParamTypes>();
	// const {username} = useContext(AppContext);
	// const [studysets, setStudysets] = useState<IStudySetResponse[]>([]);
    // console.log(studysets)
	// useEffect(()=>{
	// 	const fetchData = async () => {
	// 		const response = await QuizmeApi.getMyStudysets(username);
	// 		try{
	// 			setStudysets(response)
	// 		}catch(err){
	// 			console.log(err)
	// 		}
	// 	}
	// 	fetchData();
	// },[username])
	return (
		<>
			<h5>Memory  Game</h5>
			<MemoryGame />
		</>
	)
}

export default  GamePage;
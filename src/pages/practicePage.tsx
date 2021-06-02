import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { QuizmeApi } from '../api';
import {IStudySetResponse,IResponseFlashCard} from '../interfaces/apis';
import PracticeComponent from '../components/PracticeComponent';

type ParamTypes = {
	id: string
}

const PracticeSet = () => {
	const [studyset, setStudyset] = useState<IStudySetResponse>(Object);
	const [cards,setCards] = useState<IResponseFlashCard[]>([])
	const { id } = useParams<ParamTypes>();

    console.log(studyset)
	useEffect(()=>{
		const fetchData = async () => {
			const response = await QuizmeApi.getStudySet(id);
			try{
				console.log(response)
				setStudyset(response);
				setCards(response.cards);
			}catch(err){
				console.log(err)
			}
		}
		fetchData();
	},[id])
	return (
		<>
			<h5 style={{textAlign:"left"}}><em>Studyset:</em> {studyset.title} </h5>
			<h5 style={{textAlign:"left"}}><em>About:</em> {studyset.description} </h5>
			<p style={{textAlign:"left"}}><em>Created By:</em> {studyset.username} </p>
			<PracticeComponent cards={cards}/>
		</>
	)
}

export default PracticeSet;
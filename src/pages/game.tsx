import {useState,useEffect,useContext} from 'react';
import {useParams} from 'react-router-dom';
import StudySetCard from '../components/StudySetCard';
import { QuizmeApi } from '../api';
import AppContext from "../appContext";
import {IResponseFlashCard} from '../interfaces/apis';
import MemoryGame from '../components/games/MemoryGame';
import {useSelector} from "react-redux";
import { RootStore } from '../state/store';

type ParamTypes = {
	id: string
}

const GamePage: React.FC = () => {
	const studysets = useSelector((state: RootStore) => state.studysets.studysets);

	const { id } = useParams<ParamTypes>();
	const cards = studysets?.filter(el=>+el.id === +id)[0].cards;
	return (
		<>
			<h5>Memory  Game</h5>
			<MemoryGame cards={cards}/>
		</>
	)
}

export default  GamePage;
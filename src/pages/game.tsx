import {useParams} from 'react-router-dom';
import MemoryGame from '../components/games/MemoryGame';
import {useSelector} from "react-redux";
import { RootStore } from '../state/store';

type ParamTypes = {
	id: string
}

const GamePage: React.FC = () => {
	const { id } = useParams<ParamTypes>();
	const isWinner:boolean = useSelector((st:RootStore) => st.setWinner.setWinner);

	return (
		<>
			<h5 className="mt4 mb4"><b>Memory  Game</b></h5>
			{isWinner && <h5>Congratulations!!! You got them right!!!</h5>}
			<MemoryGame id={id}/>
		</>
	)
}

export default  GamePage;
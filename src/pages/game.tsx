import {useParams} from 'react-router-dom';
import MemoryGame from '../components/games/MemoryGame';

type ParamTypes = {
	id: string
}

const GamePage: React.FC = () => {
	const { id } = useParams<ParamTypes>();
	return (
		<>
			<h5 className="mt4 mb4"><b>Memory  Game</b></h5>
			<MemoryGame id={id}/>
		</>
	)
}

export default  GamePage;
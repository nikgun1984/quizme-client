import StudySetCard from '../components/studysetcard/StudySetCard';
import {useSelector} from "react-redux";
import { RootStore } from '../state/store';
import { useHistory } from "react-router";
import { useState }  from "react";
import IPage from '../interfaces/page';
import { RouteComponentProps } from 'react-router-dom';

const MyStudySets:React.FC<IPage & RouteComponentProps<any>> = props => {
    const userStudysets = useSelector((state: RootStore) => state.studysets.studysets);
	const [deleted,setDeleted] = useState('');
    const history = useHistory();
	const handleClick = () => {
    	history.push('/create-set');
  	}
	return (
		<>
			<h5 className="mt2"><b>My Studysets</b></h5>
			{deleted && <span className="helper-text red-text">{deleted}</span>}
			{
				userStudysets?.length?userStudysets?.map(studyset=>{
					return (
						<div key={studyset.id} className="mt2 mb2">
							<StudySetCard id={studyset.id} count={studyset.cards.length} title={studyset.title} description={studyset.description} username={studyset.username} setDeleted={setDeleted}/>
						</div>
					)
				}):
				<>
					<h6 className="mt4"><b>No studysets Added...</b></h6>
					<div className="input-field mt4">
                		<button className="btn waves-effect waves-light purple darken-1 mt4" onClick={handleClick}>Create Your First Set<i className="material-icons left">border_color</i></button>
				    </div>
				</>
			}
		</>
	)
}

export default  MyStudySets;
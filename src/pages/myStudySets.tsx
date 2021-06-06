import StudySetCard from '../components/StudySetCard';
import {useSelector} from "react-redux";
import { RootStore } from '../state/store';

const MyStudySets = () => {
    const userStudysets = useSelector((state: RootStore) => state.studysets.studysets);
	return (
		<>
			<h5>My Studysets</h5>
			{
				userStudysets?.map(studyset=>{
					return (
						<div key={studyset.id} className="mt2">
							<StudySetCard id={studyset.id} count={studyset.cards.length} title={studyset.title} description={studyset.description} username={studyset.username}/>
						</div>
					)
				})
			}
		</>
	)
}

export default  MyStudySets;
import { RouteComponentProps, useParams } from "react-router-dom";
import PracticeComponent from '../components/practice/PracticeComponent';
import {useSelector} from "react-redux";
import { RootStore } from '../state/store';
import React from "react";
import IPage from "../interfaces/page";

type ParamTypes = {
	id: string
}

const PracticeSet:React.FC<IPage & RouteComponentProps<any>> = props => {
    const studysets = useSelector((state: RootStore) => state.studysets.studysets);
	const { id } = useParams<ParamTypes>();
	const studyset = studysets?.filter(el=>+el.id === +id)[0];

	return (
		<>
			<h5 style={{textAlign:"left"}}><b>Studyset:</b> {studyset?.title} </h5>
			<p style={{textAlign:"left"}}><em>Created By:</em> {studyset?.username} </p>
			<PracticeComponent id={id}/>
		</>
	)
}

export default PracticeSet;
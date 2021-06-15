import { Dispatch, SetStateAction } from "react";
import { IResponseFlashCard } from "../interfaces/apis";

export type ParamsType = {
	id: string;
}

export type QuestionType = {
	setCorrect: Dispatch<SetStateAction<number>>;
	index:number;
	flashcards: IResponseFlashCard[];
}

export type QuizResType = {
	correct: number;
	total: number;
}

export type INUM = {
	remainingTime: number;
}

export type StudySetType = {
    id: string,
	count:number;
	title:string;
	description:string;
	username: string;
	setDeleted: Dispatch<SetStateAction<string>>;
}
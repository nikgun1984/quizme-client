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
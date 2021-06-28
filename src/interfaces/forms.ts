import { Control, DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { IResponseFlashCard, IStudySetResponse } from "./apis";
import {Dispatch,SetStateAction} from 'react';

export interface ILoginForm {
    email: string;
    password: string;
}

export interface IRegisterForm {
    email: string;
    password: string;
	username?: string;
}

export interface IFlashCardForm {
	control: Control<IStudySetResponse>;
	idx: number;
	errors: DeepMap<IStudySetResponse, FieldError>;
	watchFields: [any, any];
	remove: (idx: number) => void;
    card?: IResponseFlashCard | undefined;
    fieldID: string;
	setIsDeleted: Dispatch<SetStateAction<string>>
}


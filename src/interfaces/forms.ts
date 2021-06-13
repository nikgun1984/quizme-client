import { Control, DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { IResponseFlashCard } from "./apis";

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
	control: Control<FieldValues>;
	idx: number;
	errors: DeepMap<FieldValues, FieldError>;
	watchFields: [any, any];
	register: UseFormRegister<FieldValues>;
	remove: (index?: number | number[] | undefined) => void;
    card: IResponseFlashCard;
}


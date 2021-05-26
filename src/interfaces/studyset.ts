export interface IFlashCard {
    term:string,
    definition:string;
    img:string;
}

export interface IStudySet {
	title: string;
	description:string;
	cards: IFlashCard[];
}
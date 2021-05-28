export interface IFlashCard {
    term:string,
    definition:string;
    img:FileList;
}

export interface IStudySet {
	title: string;
	description:string;
	cards: IFlashCard[];
}
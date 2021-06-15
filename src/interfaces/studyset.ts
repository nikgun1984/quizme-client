export interface IFlashCard {
    term:string,
    definition:string;
    img?: FileList;
	image?: string | ArrayBuffer | null;
}

export interface IStudySet {
	title: string;
	description:string;
	cards: IFlashCard[];
}

export interface IEditSet {
	id: string;
	action: string;
	onSubmit: (formValues: IStudySet) => void;
}
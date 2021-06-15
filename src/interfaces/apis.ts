export interface IToken {
    token: string,
    username?: string
}

export interface IPracticeComponent {
  cards: IResponseFlashCard[]
}

export interface IStudySetResponse {
	id: string
	title: string,
	description: string,
	username: string,
	cards: IResponseFlashCard[]
}

export interface IResponseFlashCard {
	id: string,
	term: string
	definition: string,
	studyset_id: string
}

export interface IResponseWord {
	term: string,
  	partOfSpeech: string,
  	defs: string,
  	syllable: string
}

export interface IDeletedFlashcard {
	deleted: number
}
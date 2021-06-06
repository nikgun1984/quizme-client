export interface IToken {
    token: string,
    username?: string
}

export interface IPracticeComponent {
  cards: IResponseFlashCard[] | undefined
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
export interface IToken {
    token: string,
    username?: string
}

export interface IStudySetsResponse{
    studySets:IStudySetResponse[]
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
export interface GlobalContent {
	token: string | undefined
	setToken: (c: string) => void
}

// Necessary to load global voice to work
declare global {
    interface Window {
        responsiveVoice:any;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const responsiveVoice = window.responsiveVoice;
import {IFlashCard} from '../interfaces/studyset';

export const getLinks=(cards:IFlashCard[]) => {
	for(let card of cards){
		if(card.img){
			if(card.img[0]){
				const reader  = new FileReader();
				reader.readAsDataURL(card.img[0]);
				reader.onloadend = ()  =>  {
					card.image = reader.result;
				}
				reader.onerror = () => {
            		console.error('AHHHHHHHH!!');
        		};
			} else {
				card.image = '';
			}
			delete card.img;
		}
	}
}

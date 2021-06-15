import {IMemoryCard} from '../interfaces/cardGames';
import {IResponseFlashCard} from '../interfaces/apis';

/* Simple shuffle your array */
export function shuffle<T>(array:T[]):T[] {
  const copy = array.slice(0);
  copy.sort(() => Math.random() - 0.5);
  return copy;
}

export function getRandomCards(shuffledArr:IResponseFlashCard[]):IResponseFlashCard[] {
  if (shuffledArr.length > 6) {
    return shuffledArr.slice(0, 6);
  } else {
    return shuffledArr.slice(0, shuffledArr.length);
  }
}

export function getAllCards(randomArray:IResponseFlashCard[]):IMemoryCard[] {
  const cards:IMemoryCard[] = [];
  const colors = [
    "#8F00FF",
    "#CB8AFF",
    "#B75CFF",
    "#A32EFF",
    "#7500D1",
    "#E1A6F7"
  ];
  randomArray.forEach((el, idx) => {
    cards.push({ expr: el.term, id: el.id, color: colors[idx] });
    cards.push({
      expr: el.definition,
      id: el.id,
      color: colors[idx]
    });
  });
  return shuffle(cards);
}

/* Get a random index from array.length except for idx */
const getRandomNumber = (maxIdx:number, idx:number) => {
	let res;
	while (true) {
		res = Math.floor(Math.random() * maxIdx);
		if (res !== idx) break;
	}
	return res;
};

/* Create Array of Indeces except our index which  we add later */
const createArray = (arrLen:number, idx:number) => {
	let arr = [];
	for (let i = 0; i < arrLen; i++) {
		if (i !== idx) {
			arr.push(i);
		}
	}
	return arr;
};

/* Create an array for Quiz */
export const createOptionArray = (arrLen:number, idx:number) => {
	const arr = createArray(arrLen, idx);
	let optionArr = [];
	if (arr.length <= 3) {
		optionArr = [...arr];
	} else {
		for (let i = 0; i < 3; i++) {
			let randVal = getRandomNumber(arr.length, idx);
			optionArr.push(arr[randVal]);
			arr.splice(randVal, 1);
		}
	}
	optionArr.push(idx);
	return shuffle(optionArr);
};

import {ICard,IMemoryCard} from '../interfaces/cardGames';
import {IResponseFlashCard} from '../interfaces/apis';

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
  console.log(cards)
  return shuffle(cards);
}

export const getRandomNumber = (min:number,max:number,idx:number)=>{
  const step1 = max-min+1;
  let step2;
  while(true){
    step2 = Math.random()*step1;
    if(idx!==step2) break;
  }
  const step3 = Math.floor(step2)+min;
  return step3;
}

export const createArray = (from:number,to:number)=>{
  let arr = [];
  for(let i=from;i<=to;i++){
    arr.push(i);
  }
  return arr;
}

export const createOptionArray = (min:number,max:number, idx:number) => {
  const arr = createArray(min,max);
  const optionArr = [];
  for(let i=0;i<3;i++){
    if(!arr.length) return;
    let randVal = getRandomNumber(0,arr.length-1,idx);
    optionArr.push(arr[randVal]);
    arr.splice(randVal,1);
  }
  let randVal = getRandomNumber(0,optionArr.length-1,idx);
  optionArr.splice(randVal,0,idx)
  return optionArr;
}
import {ICard,IMemoryCard} from '../interfaces/cardGames';

export function shuffle<T>(array:T[]):T[] {
  const copy = array.slice(0);
  copy.sort(() => Math.random() - 0.5);
  return copy;
}

export function getRandomCards(shuffledArr:ICard[]):void {
  if (shuffledArr.length > 6) {
    shuffledArr.slice(0, 6);
  } else {
    shuffledArr.slice(0, shuffledArr.length);
  }
}

export function getAllCards(randomArray:ICard[]):IMemoryCard[] {
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
    cards.push({ expr: el.term, id: el.id, match: false, color: colors[idx] });
    cards.push({
      expr: el.definition,
      id: el.id,
      match: false,
      color: colors[idx]
    });
  });
  console.log(cards)
  return shuffle(cards);
}
import Grid from "@material-ui/core/Grid";
import {useState, useEffect,useRef} from 'react';
import FlashCard from "./FlashCard";
import useStyles from "./useStyles";
import {IMemoryCard,ICard} from '../../interfaces/cardGames';
import {IPracticeComponent,IResponseFlashCard} from '../../interfaces/apis';

import {shuffle,getRandomCards,getAllCards} from '../../utilities/shuffleCards';

// const items:ICard[] = [
//     { term: "hello", definition: "greeting", id: "3" },
//     { term: "bye", definition: "farewell remark", id: "4" },
//     { term: "carrot", definition: "orange edible root", id: "6" },
//     {
//       term: "mother",
//       definition: "a woman who gave a birth to a child",
//       id: "7"
//     },
//     { term: "pill", definition: "a small medicine in form of pillet", id: "8" },
//     {
//       term: "paper",
//       definition: "material made out of cellulose pulp",
//       id: "9"
//     }
// ];

const MemoryGame:React.FC<IPracticeComponent> = (props:IPracticeComponent) => {
  const classes = useStyles();
  const timeout = useRef<NodeJS.Timeout>();

  const [cards, setCards] = useState(() => {
      const shuffledCards = props.cards?shuffle<IResponseFlashCard>(props.cards):[];
      getRandomCards(shuffledCards);
      return getAllCards(shuffledCards);
  });

  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>(new Array(12).fill(false));

  const checking = () => {
    const [firstCard, secondCard] = flippedIndexes;
    if (cards[firstCard].id === cards[secondCard].id) {
      setFlipped(arr=>arr.map((el,idx)=>idx===firstCard || idx ===secondCard?true:el ))
      setFlippedIndexes([]);
      return;
    }
    setFlipped(arr=>arr.map((el,idx)=>idx===firstCard || idx ===secondCard?false:el ))
    // This is to flip the cards back after 1000ms duration
    timeout.current = setTimeout(() => {
      setFlippedIndexes([]);
    }, 1000);
  }

  const handleCardClick = (index:number) => {
    if (flippedIndexes.length === 1) {
      setFlippedIndexes((prev) => [...prev, index]);
    } else {
      clearTimeout(timeout.current!);
      setFlippedIndexes([index]);
    }
  };

  const checkIsFlipped = (index:number) => {
    return flippedIndexes.includes(index);
  };

  useEffect(() => {
    let timeout:any = null;
    if (flippedIndexes.length === 2) {
      timeout = setTimeout(checking, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [flippedIndexes]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {cards.map((card,idx) => (
            <Grid item key={idx}>
              <FlashCard
                card={card}
                index={idx}
                isFlipped={checkIsFlipped(idx)}
                flipped={flipped[idx]}
                onClick={handleCardClick}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MemoryGame;


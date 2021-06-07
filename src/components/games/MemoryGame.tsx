import Grid from "@material-ui/core/Grid";
import {useState, useEffect,useRef} from 'react';
import FlashCard from "./FlashCard";
import useStyles from "./useStyles";
import {useSelector} from "react-redux";
import { RootStore } from '../../state/store';
import {IMemoryCard} from '../../interfaces/cardGames';
import {IResponseFlashCard} from '../../interfaces/apis';
import {shuffle,getRandomCards,getAllCards} from '../../utilities/shuffleCards';

type IRarams = {
  id:string;
}

const MemoryGame:React.FC<IRarams> = ({id}) => {
  const studysets = useSelector((state: RootStore) => state.studysets.studysets);
  const cards = studysets?.filter(el=>+el.id === +id)[0].cards;
  const classes = useStyles();
  const timeout = useRef<NodeJS.Timeout>();

  const [flashcards, setFlashcards] = useState<IMemoryCard[]>([]);
  // console.log(flashcards[5].id);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>(new Array(12).fill(false));

  const checking = () => {
    const [firstCard, secondCard] = flippedIndexes;
    if (flashcards[firstCard].id === flashcards[secondCard].id) {
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

  useEffect(()=>{
    if(cards){
      setFlashcards(()=>{
        const shuffledCards = shuffle<IResponseFlashCard>(cards);
        const randCards = getRandomCards(shuffledCards);
        return getAllCards(randCards);
      })
    }
  },[cards]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {flashcards.map((card,idx) => (
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


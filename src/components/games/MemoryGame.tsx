import Grid from "@material-ui/core/Grid";
import {useState, useEffect,useRef} from 'react';
import { useHistory } from "react-router";
import {useSelector} from "react-redux";
import FlashCard from "./FlashCard";
import useStyles from "./useStyles";
import { RootStore } from '../../state/store';
import {shuffle,getRandomCards,getAllCards} from '../../utilities/shuffleCards';
import {ParamsType} from '../../interfaces/types';
import {IMemoryCard} from '../../interfaces/cardGames';
import {IResponseFlashCard} from '../../interfaces/apis';
import { useDispatch } from 'react-redux';
import {Dispatch} from 'redux';
import {setWinner} from '../../state/actions/winnerActions';


const MemoryGame:React.FC<ParamsType> = ({id}) => {
  const history = useHistory();
  const dispatch:Dispatch<any> = useDispatch();
  const studysets = useSelector((state: RootStore) => state.studysets.studysets);
  const cards = studysets?.filter(el=>+el.id === +id)[0].cards;
  const classes = useStyles();
  const timeout = useRef<NodeJS.Timeout>();

  const [flashcards, setFlashcards] = useState<IMemoryCard[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>(new Array(12).fill(false));
  const [countFlipped,setCountFlipped] = useState(0);

  const checking = () => {
    const [firstCard, secondCard] = flippedIndexes;
    if (flashcards[firstCard].id === flashcards[secondCard].id) {
      setFlipped(arr=>arr.map((el,idx)=>idx===firstCard || idx ===secondCard?true:el ));
      setCountFlipped(count=>count+1);
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

  const handleCardsShuffle = () => {
    setFlipped(cards=>cards.map(flipped=>false));
    setCountFlipped(0);
    dispatch(setWinner());
    setFlashcards(()=>{
      const shuffledCards = shuffle<IResponseFlashCard>(cards!);
      const randCards = getRandomCards(shuffledCards);
      return getAllCards(randCards);
    })
  }

  const handleClick = () => {
		dispatch(setWinner());
    setCountFlipped(0);
    history.push('/studysets');
  }

  useEffect(() => {
    let timeout:any = null;
    if (flippedIndexes.length === 2) {
      timeout = setTimeout(checking, 300);
    }
    if(cards?.length===countFlipped){
      dispatch(setWinner());
    }
    return () => {
      clearTimeout(timeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="input-field">
          <button className={`btn waves-effect waves-light purple darken-1 ${classes.mr1}`} onClick={handleClick}>Go Back<i className="material-icons left">arrow_back</i></button>
					<button className={`btn waves-effect waves-light purple darken-1`} onClick={handleCardsShuffle}>Restart<i className="material-icons left">restart_alt</i></button>
				</div>
      </Grid>
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


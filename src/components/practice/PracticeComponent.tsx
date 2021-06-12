import { Paper, Button, Grid, Box, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import LinearWithValueLabel from "../linearprogressbar/LinearWithValueLabel";
import FlashCard from "./FlashCard";
import {useStyles} from './useStyles';
import {useState,useEffect} from 'react';
import { useHistory } from "react-router";
import {useSelector} from "react-redux";
import { RootStore } from '../../state/store';
import { IResponseFlashCard } from "../../interfaces/apis";
import {shuffle} from '../../utilities/shuffleCards';
import {ParamsType} from '../../interfaces/types';

const PracticeComponent:React.FC<ParamsType> = ({id}) => {
  const history = useHistory();
  const classes = useStyles();
  const studysets = useSelector((state: RootStore) => state.studysets.studysets);
	const cards = studysets?.filter(el=>+el.id === +id)[0].cards;
  
  // States Necessary for shuffling
  const [flashcards,setFlashcards] = useState<IResponseFlashCard[]>([]);
  const [progress, setProgress] = useState(0);
  const [total,setTotal] = useState<number>(0);
  const [count,setCount] = useState<number>(1);

  // Progress Bar handler for Next Button
  const handleClickNext =(next:number,active:number) => {
    let itemPercent = cards?Math.floor(100/cards.length):0;
    setProgress(progress=>{
      if(count+1 === total){
        return 100;
      }
      if(progress+itemPercent>=100){
        return itemPercent;
      }
      return progress+itemPercent;
    });
    setCount(count=>{
      if(count>=total){
        return 1;
      }
      return count+1;
    });
  }

  // Progress Bar handler for Previous Button
  const handleClickPrev = (prev:number,active:number) => {
    let itemPercent = cards?Math.floor(100/cards.length):0;
    setProgress(progress=>{
      if(progress-itemPercent<=0){
        return 100;
      }
      return progress-itemPercent;
    });
    setCount(count=>{
      if(count<=1){
        return total;
      }
      return count-1;
    });
  }

  const handleCardShuffle = () => {
    setFlashcards(shuffle(flashcards));
    setCount(1);
    setProgress(Math.floor(100/flashcards.length));
  }

  const handleClick = () => {
    history.push('/studysets');
  }

  /* Make sure load our values for total and progress due to async behavior of useSelect */
  useEffect(()=>{
    if(cards){
      setTotal(cards.length);
      setProgress(Math.floor(100/cards.length));
      setFlashcards(cards);
    }
  },[cards])

  return (
    <Box m={2}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item>
          <Typography variant="h6" component="h6">
            Practice your Studyset: {"   "}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <Paper className={classes.paper3} variant="outlined">
                <Carousel 
                  autoPlay={false} 
                  animation="slide" 
                  indicators={false}
                  next={ (next:number, active:number) => handleClickNext(next,active) }
                  prev={ (prev:number, active:number) => handleClickPrev(prev,active) }
                  >
                  {flashcards.map((card) => (
                    <FlashCard key={card.id} term={card.term} definition={card.definition}/>
                  ))}
                </Carousel>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper className={classes.paper4} variant="outlined">
                <Paper className={classes.paper1} variant="outlined">
                  <Typography component="p">PROGRESS: {"   "}</Typography>
                  <LinearWithValueLabel progress={progress} count={count} total={total}/>
                  <Button variant="outlined" className={classes.buttonStyle} onClick={handleCardShuffle}>
                    Shuffle Cards
                  </Button>
                </Paper>
              </Paper>
              <div className="input-field">
                <button className="btn waves-effect waves-light purple darken-1 mt4" onClick={handleClick}>Back to Your Studysets<i className="material-icons left">arrow_back</i></button>
				      </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PracticeComponent;


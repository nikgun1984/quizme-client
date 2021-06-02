import {useState}  from 'react';
import ReactCardFlip from "react-card-flip";
import Confetti from "react-confetti";
import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';
import { Paper, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type IFlashCard  = {
	term:string;
	definition: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper2: {
      height: 300,
      padding: theme.spacing(2)
    },
    center: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "350px",
      width: "100%"
    },
    buttonStyle: {
      color: "#663399",
      borderColor: "#663399"
    }
  })
);

const FlashCard:React.FC<IFlashCard> = (props) => {
  const classes = useStyles(); 

  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  const handlePronounciation = (e:React.MouseEvent) => {
	e.preventDefault()
	window.responsiveVoice.speak(props.term,"US English Male");
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Paper className={classes.paper2} elevation={3} variant="outlined">
        <div className={classes.center}>
          <h4>{props.term}</h4>
		  <VolumeDownRoundedIcon onClick={handlePronounciation}/>
          <p>{"  "}</p>
          <Button
            className={classes.buttonStyle}
            onClick={handleClick}
            variant="outlined"
          >
            Check the answer
          </Button>
        </div>
      </Paper>
      <Paper className={classes.paper2} elevation={3} variant="outlined">
        <Confetti width={900} height={400} />
        <div className={classes.center}>
          <h5>{props.definition}</h5>
          <p>{"  "}</p>
          <Button
            className={classes.buttonStyle}
            onClick={handleClick}
            variant="outlined"
          >
            You got it!!!!!!
          </Button>
        </div>
      </Paper>
    </ReactCardFlip>
  );
};

export default FlashCard;
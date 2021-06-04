import { Paper } from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
import {IMemoryCard} from '../../interfaces/cardGames';
import useStyles from "./useStyles";
import logo from '../../qlogo.png';

type CardProps = {
	card:IMemoryCard,
	index: number;
	isFlipped: boolean;
	flipped:boolean;
	onClick: (idx:number)=>void;
}

const Card:React.FC<CardProps> = ({
	card,
	index,
	isFlipped,
	flipped,
	onClick
}) => {
  const classes = useStyles();
  const handlePaperClick = () => {
	  !isFlipped && onClick(index);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped || flipped} flipDirection="vertical">
      <Paper
        className={`${classes.paper} ${classes.background}`}
        onClick={handlePaperClick}
      >
        <div className={classes.center}>
			<img
              src={logo}
              width={30}
              alt=""
            />
		</div>
      </Paper>
      <Paper
        className={`${classes.paper}`}
		style={{backgroundColor:card.color,color:'white'}}
      >
        <div className={classes.center}>
          <p>{card.expr}</p>
          {flipped && (
            <img
              src="https://datecraft.com/assets/images/sMatchWithPeople/its_match.gif"
              width={100}
              alt=""
            />
          )}
        </div>
      </Paper>
    </ReactCardFlip>
  );
};

export default Card;
import { Paper, Button, Grid, Box, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import LinearWithValueLabel from "../LinearWithValueLabel";
import {IPracticeComponent} from "../../interfaces/apis";
import FlashCard from "./FlashCard";
import {useStyles} from './useStyles';


const PracticeComponent:React.FC<IPracticeComponent> = ({cards}) => {
  const classes = useStyles();
  console.log(cards)
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
            <Grid item md={9} xs={12}>
              <Paper className={classes.paper3} variant="outlined">
                <Carousel autoPlay={false} animation="slide" indicators={false}>
                  {cards.map((card) => (
                    <FlashCard key={card.id} term={card.term} definition={card.definition}/>
                  ))}
                </Carousel>
              </Paper>
            </Grid>
            <Grid item md={3} xs={12}>
              <Paper className={classes.paper4} variant="outlined">
                <Paper className={classes.paper1} variant="outlined">
                  <Typography component="p">PROGRESS: {"   "}</Typography>
				          <Typography>
                    <em>Good luck!!!</em> {"   "}
                  </Typography>
                  <LinearWithValueLabel />
                  <Button variant="outlined" color="primary">
                    Shuffle Cards
                  </Button>
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PracticeComponent;


import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper, Button, Grid, Box, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import LinearWithValueLabel from "./LinearWithValueLabel";
import {IResponseFlashCard} from "../interfaces/apis";
import FlashCard from "./FlashCard";

type PracticeComponentProps = {
  cards: IResponseFlashCard[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper1: {
      height: 140,
      padding: theme.spacing(2)
    },
    paper2: {
      height: 300,
      padding: theme.spacing(2)
    },
    paper3: {
      height: 330,
      padding: theme.spacing(2),
      backgroundColor: "purple"
    },
    paper4: {
      height: 170,
      padding: theme.spacing(2),
      backgroundColor: "purple"
    },
    control: {
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

const PracticeComponent:React.FC<PracticeComponentProps> = ({cards}) => {
  const classes = useStyles();
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


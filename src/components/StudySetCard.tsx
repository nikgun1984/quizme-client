import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 1000
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    },
    margin: {
      margin: theme.spacing(1),
      color: "#663399",
      borderColor: "#663399"
    },
    delete: {
      margin: theme.spacing(1),
      borderColor: "red"
    },
    edit: {
      margin: theme.spacing(1),
      borderColor: "#cd3fcd",
      color: "#cd3fcd"
    },
    logo: {
      width: 20,
      height: 20
    }
  })
);

const StudySetCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={2}>
          <Grid item container direction="row">
            <Grid item xl={10} lg={8} md={10} sm={10} xs={12}>
              <Typography component="h6" variant="h6">
                Title of the FlashCard
              </Typography>
              <Typography variant="body2" gutterBottom>
                Description goes here if any
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Number of flashcards: 30 | user5050{" "}
                <img
                  src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                  alt=""
                  className={classes.logo}
                />
              </Typography>
            </Grid>
            <Grid item xl={2} lg={4} md={2} sm={2} xs={12}>
              <div className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="https://miro.medium.com/max/1400/0*jdeMyO7-xpbvvi4b.jpg"
                />
              </div>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item container>
              <Grid item>
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  className={classes.margin}
                >
                  Practice
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  className={classes.margin}
                >
                  QuizMe{" "}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  className={classes.edit}
                >
                  Edit{" "}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="outlined"
                  size="small"
                  className={classes.delete}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default StudySetCard;
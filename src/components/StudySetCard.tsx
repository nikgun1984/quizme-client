import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';


type StudySetType = {
  id: string,
	count:number;
	title:string;
	description:string;
	username: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(3),
      margin: "auto",
      maxWidth: 1000
    },
    img: {
      margin: "auto",
      display: "block",
	  width: 120,
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
    },
	typography: {
    	flexGrow: 1,
    	textAlign: "left"
  	}
  })
);

const StudySetCard: React.FC<StudySetType> = ({id,count,title,description,username}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={2}>
          <Grid item container alignItems="center">
            <Grid item xl={10} lg={8} md={10} sm={10} xs={12} className={classes.typography}>
              <Typography component="h6" variant="h6">
                {title}
              </Typography>
              <Typography component="p" variant="body2" gutterBottom>
                {description}
              </Typography>
              <Typography component="p" variant="body2" color="textSecondary">
                Number of flashcards: {count} | {username}{" "}
                <img
                  src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                  alt=""
                  className={classes.logo}
                />
              </Typography>
            </Grid>
            <Grid item container xl={2} lg={4} md={2} sm={2} xs={12} justify="flex-end">
                <img
                  className={classes.img}
                  alt="complex"
                  src="https://miro.medium.com/max/1400/0*jdeMyO7-xpbvvi4b.jpg"
                />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item container justify="center">
              <Grid item>
                <Button
                  color="primary"
                  variant="outlined"
                  size="small"
                  className={classes.margin}
                  component={Link} 
                  to={`/studysets/${id}`}
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
                  className={classes.margin}
                  component={Link} 
                  to={`/studysets/${id}/memorygame`}
                >
                  Memory Game{" "}
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
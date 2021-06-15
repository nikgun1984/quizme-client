import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
	quizOptions: {
		position:"relative",
		display: "flex",
  		justifyContent: "center",
        alignItems: "center",
	},
	options: {
  		opacity: 0,
  		// transitionDuration: 1s ease,
    },
	optionsActive: {
		opacity: 1,
		// transitionDuration: 1s,
		// transform: scale(1.08),
	}
  }),
);
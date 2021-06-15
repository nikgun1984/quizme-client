import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
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
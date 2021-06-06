import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
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
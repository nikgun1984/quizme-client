import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 140,
      cursor: "pointer"
    },
    background: {
      backgroundColor: "violet"
    },
    control: {
      padding: theme.spacing(2)
    },
    center: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "140px",
      width: "100%"
    }
  })
);

export default useStyles;
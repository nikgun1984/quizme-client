import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 20
    },
    paper: {
      height: 180,
      width: 140,
      cursor: "pointer"
    },
    paper2: {
      height: 180,
      width: 140,
      border: "5px solid #4a148c",
      borderRadius: "8px",
      animation: "4s infinite glow"
    },
    background: {
      backgroundColor: "violet",
      border:"2px black"
    },
    mr1: {
      marginRight: "1rem"
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
    },
    bottom:{
      valign:"bottom"
    },
    "@keyframes glow":{
      "0%": {
        borderColor: "#d500f9"
      },
      "25%": {
        borderColor: "#9c27b0"
      },
      "50%": {
        borderColor: "#4a148c"
      },
      "75%": {
        borderColor: "#4a148c"
      },
      "100%": {
        borderСolor: "#d500f9"
      }
    },
    "@-webkit-keyframes glow": {
      "0%": {
          borderColor: "#d500f9"
      },
      "25%": {
          borderColor: "#4a148c"
      },
      "75%": {
          borderColor: "#9c27b0"
      },
      "100%": {
          borderColor: "#4a148c"
      }
    },
  })
);

export default useStyles;
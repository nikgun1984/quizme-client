import { makeStyles } from "@material-ui/core/styles";
import { LinearProgressBar } from "./LinearProgressBar";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

type IProps = {
  progress: number;
  count:number;
  total:number;
}

const LinearWithValueLabel:React.FC<IProps> = ({progress,count,total}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgressBar value={progress} count={count} total={total}/>
    </div>
  );
}

export default LinearWithValueLabel;
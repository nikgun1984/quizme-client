import LinearProgress, { LinearProgressProps} from "@material-ui/core/LinearProgress";
import {Typography, Box} from "@material-ui/core";


export const LinearProgressBar = ( props: LinearProgressProps & { value: number, count:number, total:number }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${props.count} out of ${props.total}`}</Typography>
      </Box>
    </Box>
  );
}
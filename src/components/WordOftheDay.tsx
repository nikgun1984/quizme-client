import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useSelector} from "react-redux";
import { RootStore } from '../state/store';
import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  hover:{
    cursor:"pointer"
  }
});

export default function WordOftheDay() {
  const classes = useStyles();
  const wordOfDay = useSelector((state: RootStore) => state.word.word);

  const handlePronounciation = (e:React.MouseEvent) => {
    e.preventDefault()
    window.responsiveVoice.speak(wordOfDay.term,"US English Male");
  }

  return (
    <Paper className={classes.root} elevation={3}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h5">
          {wordOfDay.syllable}
          {"   "}
          <VolumeDownRoundedIcon onClick={handlePronounciation} className={classes.hover}/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {wordOfDay.partOfSpeech}
        </Typography>
        <Typography variant="body2" component="p">
          {wordOfDay.defs}
        </Typography>
      </CardContent>
    </Paper>
  );
}
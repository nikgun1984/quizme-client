import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
	boxBorder: {
		borderWidth: '1px',
		borderStyle: 'dashed',
		borderRadius: '20px',
		marginTop:'1rem',
		marginBottom:'1rem'
	},
	space: {
		padding:'1rem'
	}
  }),
);
export const AddCard:React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.boxBorder}>
				<div className={classes.space}>
		<Grid item container spacing={4}>
						<Grid item xs={12} lg={6} alignItems="center">
							<Paper className={`${classes.paper} input-field`}>
								<Typography variant="h6">Add Card</Typography>
							</Paper>
						</Grid>
					</Grid>
					</div>
					</div>
	)
}
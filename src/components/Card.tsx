import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Count {
	count: number;
}

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

export const Card: React.FC<Count> = (props) => {
	const classes = useStyles();
	return (<div className={classes.boxBorder}>
				<div className={classes.space}>

				
					<Grid item container spacing={4}>
						<Grid item xs={12} lg={4}>
							<p>{`FLASHCARD #${props.count}`}</p>
							<Paper className={`${classes.paper} input-field`}>
								<input id="description" name="description" type="text" className="validate" placeholder="Enter term"/>
								<label htmlFor="description" className="active">TERM</label>
							</Paper>
						</Grid>
					
					   <Grid item xs={12} lg={4}>
							<Paper className={`${classes.paper} input-field`}>
								<input id="description" name="description" type="text" className="validate" placeholder="Enter definition"/>
								<label htmlFor="description" className="active">DEFINITION</label>
							</Paper>
					   </Grid>
					   <Grid item xs={12} lg={2}>
							<Paper className={`${classes.paper} input-field`}>
								<input type="file" className="validate" />
								<label htmlFor="description" className="active">IMAGE</label>
							</Paper>
					   </Grid>
					</Grid>
					</div>
				
		{/* <Container>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Grid item xs={5}>
						<span className="input-field">
							<input id="description" name="description" type="text" className="validate" placeholder="Enter term"/>
							<label htmlFor="description" className="active">TERM</label>
						</span>
					</Grid>
					<Grid item xs={5}>
						<span className="input-field">
							<input id="description" name="description" type="text" className="validate" placeholder="Enter term"/>
							<label htmlFor="description" className="active">TERM</label>
						</span>
					</Grid>
				</Grid>
			</Grid>
		</Container> */}
	</div>)
}
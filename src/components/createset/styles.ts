import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
	  marginTop: '2rem'
    },
    headerCreate: {
      textAlign: 'left',
    },
	headerButton: {
      textAlign: 'right',
    },
	textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
	inputField:{
		margin: 8,
	},
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
	},
	display: {
		display: 'none'
	}
  }),
);
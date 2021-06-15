import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: '#9811d6',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#9811d6',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: '#9811d6',
          },
        },
        '&$focused $notchedOutline': {
          borderColor: '#9811d6',
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#9811d6'
        }
      }
    },
  }
});

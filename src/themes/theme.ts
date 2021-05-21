import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        color: 'blue',//input color focus of not  
        backgroundColor:"yellow",//background color of whole input 
        '&:hover:not($disabled):after': {
          backgroundColor: 'red',//its when its hover and input is focused 
        },
        '&:hover:not($disabled):before': {
          backgroundColor: 'red',//its when you hover and input is not foucused 
        },
        '&:after': {
          backgroundColor: 'red',//when input is focused, Its just for example. Its better to set this one using primary color
        },
        '&:before': {
          backgroundColor: 'red',// when input is not touched
        },
      },
    },
  },
});

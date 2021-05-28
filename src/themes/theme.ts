import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  // palette:{
  //   type: 'dark'
  // },
  overrides: {
    MuiMenuItem: {
      selected: {
      //   // Does not work:
      //   // background: 'red',

      //   // Does not work:
      //   // backgroundColor: 'red',

      //   // Works (without the need for !important)
        background: 'linear-gradient(45deg, red 30%, orange 90%)',

      //   // Works (must use !important):
      //   // backgroundColor: 'red !important',

      //   // Works (must use !important):
      //   // background: 'red !important',
      }, 
    },
  },
});

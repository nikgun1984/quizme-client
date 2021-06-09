import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps} from 'react-router-dom';
import logging from './configs/logging';
import routes from './configs/routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppContext from './appContext';
import useLocalStorageState from './hooks/useLocalStorageState';
import { MuiThemeProvider } from '@material-ui/core';
import {theme} from './themes/theme';
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {getUserStudySets} from "./state/actions/studysetActions"
import {IWinnerState} from './interfaces/reducers';
import Confetti from "react-confetti";
import useWindowSize from './hooks/useWindowSize';
import { RootStore } from './state/store';

const App: React.FC<{}> = (props) => {
  const dispatch = useDispatch();
  const isWinner:boolean = useSelector((st:RootStore) => st.setWinner.setWinner);
  // const [isWinner,setIsWinner] = React.useState(false);
  const { width, height } = useWindowSize();

  const [token, setToken] = useLocalStorageState("token", "");
  const [username,setUsername] = useLocalStorageState("username", "");
  
  // Lets load application
  useEffect(()=> {
    logging.info('Loading application...');
    console.log(isWinner);
    if(username){
      dispatch(getUserStudySets(username));
    }
  },[username,dispatch])

  return (
      <MuiThemeProvider theme={theme}>
      <BrowserRouter>
      <AppContext.Provider value={{token, setToken,username,setUsername}}>
        {isWinner && <Confetti width={width} height={height} />}
        <NavBar />
        <div className="container center-align">
            <Switch>
              {routes.map((route, index)=>{
                return (
                  <Route 
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      render={(props: RouteComponentProps<any>) => (
                          <route.component
                              name={route.name} 
                              {...props}
                              {...route.props}
                          />
                      )}
                  />
                )
              })}
            </Switch>
        </div>
        <Footer />
        </AppContext.Provider>
      </BrowserRouter>
      </MuiThemeProvider>
  );
}

export default App;


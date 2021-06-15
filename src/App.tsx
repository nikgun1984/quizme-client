import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import { MuiThemeProvider } from '@material-ui/core';
import Confetti from "react-confetti";
import logging from './configs/logging';
import routes from './configs/routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppContext from './appContext';
import useLocalStorageState from './hooks/useLocalStorageState';
import {theme} from './themes/theme';
import {getUserStudySets} from "./state/actions/studysetActions";
import {getWord} from "./state/actions/wordActions";
import useWindowSize from './hooks/useWindowSize';
import { RootStore } from './state/store';
import { formatDate } from './utilities/getCorrectDate';

const App: React.FC<{}> = (props) => {
  const dispatch = useDispatch();
  const isWinner:boolean = useSelector((st:RootStore) => st.setWinner.setWinner);
  const { width, height } = useWindowSize();

  const [token, setToken] = useLocalStorageState("token", "");
  const [username,setUsername] = useLocalStorageState("username", "");
  
  // Lets load application
  useEffect(()=> {
    logging.info('Loading application...');
    const date = formatDate(new Date().toString());
    dispatch(getWord(date));
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


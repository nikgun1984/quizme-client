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
import {useDispatch} from "react-redux";
import {getUserStudySets} from "./state/actions/studysetActions"

const App: React.FC<{}> = (props) => {
  const dispatch = useDispatch();
  const [token, setToken] = useLocalStorageState("token", "");
  const [username,setUsername] = useLocalStorageState("username", "");
  
  // Lets load application
  useEffect(()=> {
    logging.info('Loading application...');
    if(username){
      dispatch(getUserStudySets(username));
    }
  },[username,dispatch])

  return (
      <MuiThemeProvider theme={theme}>
      <BrowserRouter>
      <AppContext.Provider value={{token, setToken,username,setUsername}}>
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


import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps} from 'react-router-dom';
import logging from './configs/logging';
import routes from './configs/routes';
import NavBar from './components/NavBar';


const App: React.FC<{}> = (props) => {
  useEffect(()=> {
    logging.info('Loading application...');
  },[])
  return (
    <>
      <NavBar  />
      <div className="container center-align">
        <h1>Welcome to the application!!!</h1>
        <BrowserRouter>
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
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

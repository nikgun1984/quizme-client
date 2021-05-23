import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps} from 'react-router-dom';
import logging from './configs/logging';
import routes from './configs/routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App: React.FC<{}> = (props) => {
  useEffect(()=> {
    logging.info('Loading application...');
  },[])
  return (
      <BrowserRouter>
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
      </BrowserRouter>
  );
}

export default App;


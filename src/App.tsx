import React from 'react';
import NavBar from './components/NavBar';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';


const App: React.FC = () => {
  return (
    <>
      <NavBar  />
      <div className="container center-align">
        <h1>Welcome to the application!!!</h1>
        <SignupForm/>
        <SigninForm/>
      </div>
    </>
  );
}

export default App;

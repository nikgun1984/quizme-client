import React from 'react';
import NavBar from './components/NavBar';
import SignupForm from './components/SignupForm';

const App: React.FC = () => {
  return (
    <>
      <NavBar  />
      <div className="container center-align">
        <h1>Welcome to the application!!!</h1>
        <SignupForm/>
      </div>
    </>
  );
}

export default App;

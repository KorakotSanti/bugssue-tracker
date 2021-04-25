import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import './App.css';
import HomePage from './pages/HomePage/HomePage.component';
import SiginInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.component';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SiginInSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;

import React from "react";
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';





function App() {
  return (
     <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <>
            <Header />
            <NavBar />
            <Main />
          </>
        </Route>
        <Route path={'/search'}>
          <>
            <Header />
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

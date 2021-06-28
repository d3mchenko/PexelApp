import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import SearchPage from "./components/SearchPage/SearchPage";
import Images from "./components/Main/Images/Images";






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
            <SearchPage />
            <Images />
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

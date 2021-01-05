import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
<Router>
<div className="app">
   <Switch>

    <Route path="/login">
    <Header/>
      <h1>login</h1>
    </Route>
   
    <Route path="/contactUs">
    <Header/>
      <h1>Contact us</h1>
    </Route>
    <Route path="/checkout">
    <Header/>
      <h1>Your Basket</h1>
    </Route>

    <Route path="/menu">
    <Header/>
      <h1>Menu</h1>
    </Route>

    <Route path="/">
      <Header/>
      <Home/>
    </Route>

    </Switch>    
</div>
</Router>

  );
}

export default App;


import './App.css';


import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from '../Pages/LandingPage/LandingPage';
import NavBar from '../NavBar/NavBar';
import ShopPage from '../Pages/ShopPage/ShopPage';
import SignInPage from '../Pages/SignInPage/SignInPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';


export let pageWrapper = React.createContext()

function App() {


  const [offSetY,setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(()=>{

  window.addEventListener("scroll",handleScroll);

  return () => window.removeEventListener("scroll",handleScroll);

  },[])

  

  return (

    <div className="App">
      <pageWrapper.Provider value={{offSetY}}>
      <Router>
      <NavBar offSetY={offSetY}/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/Shop" component={ShopPage}/>
          <Route path="/SignIn" component={SignInPage}/>
          <Route path="/SignUp" component={SignUpPage}/>
        </Switch>
      </Router>
      </pageWrapper.Provider>
    </div>
  );
}

export default App;

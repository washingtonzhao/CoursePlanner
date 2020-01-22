import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {                                         
  return(
    <Router>
    <div className="App">
    <LandingPage />
    
    <Link to="/planner"><button className="routeButton">Let's get started!</button></Link>


    <Switch>
      <Route path="/planner">
        <MainPage />
      </Route>
    </Switch>

    </div>
    </Router>
  );
}

export default App;

function LandingPage(){
  return (
    <p className ="landingText"> 
      Make your college course plan... <br/><br/>
      Track your progress...<br/><br/>
      Save multiple tracks for consideration...<br/><br/>
      Easily export to downloadable document...<br/><br/>
    </p>
  );
}
function MainPage(){
  return (
      <h1> hello world</h1>
  );
}

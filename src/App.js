import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Navigation  from "./Components/Navigation/Navigation";
import  Home  from "./Components/Home/Home";
import  Heroes from "./Components/Heroes/Heroes";
import  Team  from "./Components/Team/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/heroes" exact component={() => <Heroes />} />
          <Route path="/team" exact component={() => <Team />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

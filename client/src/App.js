import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/search/index"
import Fav from "./pages/fav/index"
import NavBar from "./components/navBar/navBar"

function App() {
  return (
    <Router>
      <div>
        
        <NavBar />      
      <Route exact path="/" component={Search} />
        <Route exact path="/fav" component={Fav} />

       
      
      </div>
      </Router>
  )
}

export default App;

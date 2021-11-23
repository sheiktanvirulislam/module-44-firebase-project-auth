
import {
  BrowserRouter as Router,
  Route,Switch
  
  
} from "react-router-dom";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
export const userContext = createContext();
function App() {
  const[loggedInUser,setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
     
       <Router>
       <Header></Header>
       <h1>Name:{loggedInUser.name}</h1>
       <Switch>
       <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book/:bedType">
            <Book></Book>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
       </Switch>

       </Router>
       
        
    </userContext.Provider>
  );
}

export default App;

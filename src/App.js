import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import { GlobalProvider } from './context/GlobalState'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
      <GlobalProvider>

        <Router>
        <h1>Nav</h1>
        <Switch>
          
          <Route path="/add" component={AddUser}/>
          <Route path="/edit/:id" component={EditUser}/>
          <Route path="/" component={Home}/>
        </Switch>

        </Router>
      </GlobalProvider> 
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <BrowserRouter>
      <h1>Luke ApiWalker</h1>
      <p>
        <Link to="/">Welcome</Link>
        {' | '}
        <Link to="/people">People</Link>
        {' | '}
        <Link to="/planet">Planet</Link>
      </p>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/people/:id">
          <People />
        </Route>
        <Route path="/planet/:id">
          <Planet />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

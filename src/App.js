import React, { lazy, Suspense } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import api from './services/api/api';
import mockCats from './__mock__/cats.json';

const Welcome = lazy(() => import('./views/Welcome/Welcome'));
const Scores = lazy(() => import('./views/Scores/Scores'));
const Vote = lazy(() => import('./views/Vote/Vote'));


function App() {
  const [cats, setCatList] = useState([]);

  useEffect(() => {
    setCatList(mockCats.images || api.getCats());
  }, []);

  return (
    <Router>
      <header className="App-header">
        <nav>
          <NavLink to="/scores">Scores</NavLink>
          <NavLink to="/vote">Vote</NavLink>
        </nav>
      </header>

      <main className="App-main">
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<h1>Loading Cutty App...</h1>}>
              <Welcome />
            </Suspense>
          </Route>
          <Route exact path="/scores">
            <Suspense fallback={<h1>Let's see actual scores</h1>}>
              {
                cats.length && <Scores cats={cats} />
              }
            </Suspense>
          </Route>
          <Route exact path="/vote">
            <Suspense fallback={<h4>Now let's vote for the ONE</h4>}>
              <Vote />
            </Suspense>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

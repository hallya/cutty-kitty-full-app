import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Scores from './components/Scores/Scores';
import Vote from './components/Vote/Vote';

function App() {
  return (
    <Router>
      <header className="App-header">
        <nav>
          <Link to="/scores">Scores</Link>
          <Link to="/vote">Voter</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/scores">
            <Scores />
          </Route>
          <Route path="/vote">
            <Vote />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

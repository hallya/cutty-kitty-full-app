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
  const [state, setState] = useState({
    cats: [],
    roundNumber: 1,
    leftIndex: null,
    rightIndex: null
  });

  useEffect(() => {
    const cats = addPropertiesIn(mockCats.images || api.getCats());
    const leftIndex = 0;
    const rightIndex = cats.length - 1;
    setState({
      ...state,
      cats,
      leftIndex,
      rightIndex
    });
  }, []);
  
  function addPropertiesIn(list) {
    return list.map(element => ({
      ...element,
      score: 0,
      view: 0
    }));
  }

  function updateView(catId) {
    const { leftIndex, rightIndex, cats: oldCats } = state;

    const index = oldCats.findIndex((cat) => cat.id === catId);
    
    const roundNumber =  state.roundNumber + 1;
    
    const cats = [...oldCats];
    cats[index].score = oldCats[index].score + 1;
    cats[leftIndex].view = oldCats[leftIndex].view + 1;
    cats[rightIndex].view = oldCats[rightIndex].view + 1;
    
    const candidatesIndex = isFirstRound() 
      ? linearSelectionOfCandidatesIn({leftIndex, rightIndex})
      : randomSelectionOfCandidates();
    setState({
      cats,
      roundNumber,
      ...candidatesIndex
    });
  }

  function linearSelectionOfCandidatesIn({ leftIndex, rightIndex }) {
    return {
      leftIndex: leftIndex + 1,
      rightIndex: rightIndex - 1
    };
  }

  function randomSelectionOfCandidates() {
    const leftIndex = Math.round(state.cats.length * Math.random());
    const rightIndex = Math.round(state.cats.length * Math.random());

    if (leftIndex === rightIndex
      || leftIndex === state.leftIndex
      || rightIndex === state.rightIndex) {
      return randomSelectionOfCandidates();
    }
    return { 
      leftIndex,
      rightIndex
    };
  }

  function isFirstRound() {
    const halfOfCatList = Math.round(state.cats.length / 2);
    const { leftIndex, rightIndex } = state;
    if (leftIndex >= halfOfCatList || rightIndex <= halfOfCatList) {
      return false;
    }
    return true;
  }
 
  const { cats, leftIndex, rightIndex, roundNumber } = state;
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
            <Suspense fallback={<h1>Loading Cutty App ♥...</h1>}>
              <Welcome />
            </Suspense>
          </Route>
          <Route exact path="/scores">
            <Suspense fallback={<h1>Let's see actual scores 🤓</h1>}>
              {
                cats.length && <Scores cats={cats} />
              }
            </Suspense>
          </Route>
          <Route exact path="/vote">
            <Suspense fallback={<h1>Now let's vote for THE ONE !</h1>}>
              {
                cats.length &&
                <Vote
                  leftCat={cats[leftIndex]}
                  rightCat={cats[rightIndex]}
                  updateView={updateView}
                  roundNumber={roundNumber} />
              }
            </Suspense>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

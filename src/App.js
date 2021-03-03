import './App.css';
import StartGame from './components/StartGame';
import Game from './components/Game';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/game-over">Game over</Route>
          <Route path="/">
            <StartGame />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

import './App.css';
import { Switch, Route } from 'react-router';

import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/about">
          <h1>about</h1>
        </Route>
        <Route path="/signup">
          <h1>signup</h1>
        </Route>
        <Route path="/signin">
          <h1>signin</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

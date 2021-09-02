import './App.css';
import { Switch, Route } from 'react-router';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main id='main-content'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

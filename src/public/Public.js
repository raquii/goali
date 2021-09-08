import { Switch, Route } from 'react-router';

import NavBar from './navbar/NavBar';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import Home from './home/Home';

function Public() {

  return (
    <>
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
    </>
  );
}

export default Public;

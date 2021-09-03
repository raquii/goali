import './App.css';
import { Switch, Route } from 'react-router';
import { useState, useEffect } from 'react';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/user')
    .then(r=>{
      if(r.ok){
        r.json()
        .then(user=>setUser(user));
      }else{
        r.json()
        .then(console.log(r))
      }
    });
  }, [])

  return (
    <div className="App">
      <NavBar user={user} onLogout={setUser}/>
      {user&&<h1>You're logged in!</h1>}
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
            <SignIn onSignIn={setUser}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

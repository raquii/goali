import './App.css';
import { useState, useEffect } from 'react';
import { useIsLoggedInQuery } from './features/api';

import Public from './public/Public';
import Private from './private/Private';

function App() {
  const [user, setUser] = useState(null);
  // const { data, error, isLoading } = useIsLoggedInQuery();
  useEffect(() => {
    fetch('http://localhost:3000/me',
    { 'method':'GET',
      'credentials': "include",
      headers:{
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
      
    })
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

  // console.log(user)
  return (
    <div className="App">
      {/* <Private /> */}
      {user ?
        <Private onLogout={setUser} currentUser={user} />
        :
        <Public onSignIn={setUser} />
      }
    </div>
  );
}

export default App;

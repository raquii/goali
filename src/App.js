import './App.css';
import { useEffect, useCallback } from 'react';
import { useIsLoggedInMutation } from './features/api';
import { useSelector } from 'react-redux';


import Public from './public/Public';
import Private from './private/Private';

function App() {
  
  const [isLoggedIn] = useIsLoggedInMutation();

  const username = useSelector(state => state.user.username)

  const checkForSession = useCallback(async () => {
    try {
      await isLoggedIn().unwrap()
    } catch (error) {
      console.error()
    }
  }, [isLoggedIn])

  useEffect(() => {
    checkForSession()
  }, [checkForSession])

  return (
    <div className="App">
      {username.length > 0 ?
        <Private />
        :
        <Public />
      }
    </div>
  );
}

export default App;

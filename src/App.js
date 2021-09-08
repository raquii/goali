import './App.css';
import { useEffect, useCallback } from 'react';
import { useIsLoggedInMutation } from './features/api';
import { useSelector } from 'react-redux';
import Public from './public/Public';
import Private from './private/Private';
import { useHistory } from 'react-router';


function App() {

  const [isLoggedIn] = useIsLoggedInMutation();

  const username = useSelector(state => state.user.username);
  const history = useHistory();

  const checkForSession = useCallback(async () => {
    try {
      await isLoggedIn().unwrap()
      history.push('/dashboard')
    } catch (error) {
      console.error()
      history.push('/home')
    }
  }, [isLoggedIn, history]);

  useEffect(() => {
    checkForSession()
  }, [checkForSession]);

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

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import timeDifference from 'lib/time-difference'

function App() {
  const [updateAvailable, setUpdateAvailable] = useState(false)

  const handleUpdate = event => {
    window.postMessage('UPDATE')
  }

  const showUpdateButton = event => {
    if (event.data === 'UPDATE_AVAILABLE') {
      setUpdateAvailable(true)
    }
  }

  useEffect(() => {
    window.addEventListener('message', showUpdateButton, false)

    return () => {
      // cleanup
      window.removeEventListener('message', showUpdateButton)
    }
  }, [])

  const lastBuild = process.env.REACT_APP_BUILD_TIME

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React App</h1>
        <p>Last build: {lastBuild} ({timeDifference(lastBuild)} ago)</p>
        {updateAvailable && <button onClick={handleUpdate}>Update</button>}
      </header>
    </div>
  );
}

export default App;

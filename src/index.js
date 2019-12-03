import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: reg => {
    const waiting = reg.waiting

    if (waiting) {
      waiting.addEventListener('statechange', event => {
        if (event.target.state === 'activated') {
          window.location.reload()
        }
      })
      waiting.postMessage({type: 'SKIP_WAITING'})
    }
  }
});

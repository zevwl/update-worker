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

  // Source: https://stackoverflow.com/a/58277085/5090056
  onUpdate: reg => {
    reg.unregister().then(() => {
      window.location.reload();
    })
  },

  onSuccess: reg => {
    console.info('Service worker success!');
    console.log(reg);
  }

});

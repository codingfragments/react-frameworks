import * as React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title text-warning">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
        <Button variant="raised" color="primary">
          Hello World
      </Button>
      </>
    );
  }
}

export default App;

import * as React from 'react';
import './App.css';


class App extends React.Component {
  public render() {
    return (
      <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
          <header className="app-header navbar flex-row">
              <span className="navbar-brand"> TESTER </span>
                  <div className="nav navbar-nav flex-row">
                  <div className="nav-item px-3">
                      <a className="nav-link" href="#">Dashboard</a>
                  </div>
                  <div className="nav-item px-3">
                      <a className="nav-link" href="#">Users</a>
                  </div>
                  <div className="nav-item px-3">
                      <a className="nav-link" href="#">Settings</a>
                  </div>
              </div>
              <div className="nav-item my-2 my-lg-0">...</div>
          </header>
      </div>
    );
  }
}

export default App;

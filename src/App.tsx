import {Button} from "antd";
import * as React from 'react';
import {Icon} from "react-fa";


// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <Button type="primary"> <Icon name="spinner" spin={true}/> Button press me </Button>
      </div>
    );
  }
}

export default App;


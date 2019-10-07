import React from 'react';
import Sidebar from './components/Sidebar.js'
import Body from './components/Body.js'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';


class App extends React.Component {

  render() {
    return (
      <div className="App">

      <Sidebar/>
      <Body/>

      </div>
    );
  }
}

export default App;

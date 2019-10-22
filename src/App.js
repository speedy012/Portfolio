import React from 'react';
import Sidebar from './components/Sidebar.js'

import About from './components/About.js'
import Intro from './components/Intro.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';


class App extends React.Component {

  render() {
    return (

      <div className="App">

      <Sidebar/>
      <Intro/>
      <Portfolio/>
      <About/>
      <Contact/>

      </div>

    );
  }
}

export default App;

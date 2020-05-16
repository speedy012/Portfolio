import React from 'react';
import Sidebar from './components/Sidebar.js'
import About from './components/About.js'
import Intro from './components/Intro.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';



class App extends React.Component {
  scrollPortfolio = () => {
    let sp = document.getElementById('p-comp');
    sp.scrollIntoView({behavior: "smooth"});
  }


  render() {
    return (

      <div className="App">

      <Sidebar/>
      <Intro/>
      <Portfolio className="scrollspy"/>
      <About/>
      <Contact/>
      </div>

    );
  }
}

export default App;

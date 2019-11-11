import React from 'react';


class Intro extends React.Component {

  scrollPortfolio = () => {
    let sp = document.getElementById('p-comp');
    sp.scrollIntoView({behavior: "smooth"});
  }

  render() {

  return (
    <div className="intro-comp" id="i-comp">
      <div className="intro-body">
      <h2 className="grey-text"> Hi! I'm <span className="highlight"> Herman</span>, a <span className="highlight" >software engineer </span>
        <br/>living and working in <span className="highlight">NYC</span>
      </h2>
      </div>
    </div>
  )
}
}

export default Intro;

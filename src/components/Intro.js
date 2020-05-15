import React from 'react';


class Intro extends React.Component {
  render() {

  return (
    <div className="intro-comp" id="io-comp">
      <div className="intro-body">
        <h2 className="grey-text"> Hi! I'm <span className="highlight"> Herman</span>, a <span className="highlight" >software engineer </span>
          <br/>living and working in <span className="highlight">NYC</span>
        </h2>
        <a className="btn-large waves-effect waves-light" href="my portfolio button">View My Work</a>
      </div>
    </div>
  )
}
}

export default Intro;

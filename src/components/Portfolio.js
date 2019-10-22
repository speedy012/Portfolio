import React from 'react';

class Portfolio extends React.Component {
  render() {

  return (
    <div className="portfolio-comp">
      <h2> Portfolio Projects </h2>
      <h5> You can find more of my projects and contributions on <a   href="https://github.com/speedy012"> github</a></h5>
      <div className="photo1">
        <img className="easy-paking-pic" src={require('../easy-parking.png')} alt="project-pic"/>
      </div>
    </div>
  )
}
}

export default Portfolio;

import React from 'react';

class Portfolio extends React.Component {
  render() {

  return (
    <div className="portfolio-comp" id="port-comp">
      <h2> Portfolio Projects </h2>
      <h5> You can find more of my projects and contributions on <a id="link" href="https://github.com/speedy012"> github</a></h5><br/>
      <div>
        <img className="photo1" src={require('../easy-parking.png')} alt="project-pic"/>
      </div><br/>
      <h5> <span className="title">Easy Parking</span> - web app to find local street parking.</h5><br/><br/>
      <div>
        <img className="photo2" src={require('../solelykicks.png')} alt="solelykicks-pic"/>
      </div><br/>
      <h5> <span className="title">Solelykicks</span> - web app to organize your favorite sneaker collections.</h5>
    </div>
  )
}
}

export default Portfolio;

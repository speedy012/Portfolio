import React from 'react';


class About extends React.Component {
  render() {

  return (

    <div className="about-comp" id="a-comp">
      <h2 className="opening"> A little about me... </h2> <br/> <br/>
      <div >
        <img className="personal-pic" src={require('../me.jpg')} alt="surf-pic"/>
      </div>
      <div>
        <h5 className="bio-body"> A full stack software engineer <br/> building software
        to make people's <br/>life easier. <br/> <br/> Let's do something special! <br/> <br/>
        </h5>
      </div>
    </div>
  )
}
}

export default About;

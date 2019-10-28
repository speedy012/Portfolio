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
        <p className="bio-body"> A Full stack software engineer <br/> building software
        to make people's life easier. <br/> Let's do something special! <br/> <br/>
        Request Resume:
        </p>
      </div>
    </div>
  )
}
}

export default About;

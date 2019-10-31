import React from 'react';


class Contact extends React.Component {

  scrollIntro = () => {
    let sp = document.getElementById('i-comp');
    sp.scrollIntoView({behavior: "smooth"});
  }


  render() {

  return (
    <div className="contact-comp" id="c-comp">
    <div className="contact-body">
      <h3> Contact</h3>
      <h4> If you have any questions about my projects <br/>or will like to connect, <br/> just click on the link to send me an email: <a id="link" href="mailto:hermsrivas@gmail.com?subject=Request Resume"> here!</a></h4>
      <br/>
      <i onClick={this.scrollIntro} className="large material-icons" href="#!">arrow_upward</i>
    </div>
    </div>
  )
}
}

export default Contact;

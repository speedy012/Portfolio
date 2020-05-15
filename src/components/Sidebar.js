import React, { Component } from "react";
import { Link } from "react-scroll";
import M from "materialize-css/dist/js/materialize.min.js";


class Sidebar extends Component {

  componentDidMount() {
   const options = {
    isFixed: true
   };
   M.Sidenav.init(this.Sidenav);

   let instance = M.Sidenav.getInstance(this.Sidenav);
 }

 render() {
   return (
     <div >
       <ul
         ref={Sidenav => {
           this.Sidenav = Sidenav;
         }}
         id="slide-out"
         className="sidenav sidenav-fixed"
       >
         <li >
           <div className="user-view">
             <div className="background">

             </div>
             <div className="pics">
             <a href="#user">
               <img className="circle" src={require('../new_pic.jpg')} alt="background-pic"/>
             </a>
               <span id="name" className="white-text name">Herman Rivas</span>
             <a href="#title">
               <span id="title" className="grey-text">Software Engineer</span>
             </a>
             </div>
           </div>
           <div className="divider"></div>
         </li>
         <div className="sidebar">
         <Link  activeClass="active" to="i-comp" spy={true} smooth={true} offset={0} duration={500}>
         <li className="intro">
           <a id="introduction" href="#!">
            Intro <i className="material-icons right grey-text">home</i>
           </a>
         </li>
         </Link>
         <Link  activeClass="active" to="p-comp" spy={true} smooth={true} offset={0} duration={500} >
         <li className="port ">
           <a id="portfolio" href="#!">
            Portfolio <i className="material-icons right grey-text">apps</i>
            </a>
         </li>
         </Link>
         <Link  activeClass="active" to="a-comp" spy={true} smooth={true} offset={0} duration={500}>
         <li className="ab">
           <a id="about" href="#!">
            About Me <i className="material-icons right grey-text">account_box</i>
            </a>
         </li>
         </Link>
         <Link  activeClass="active" to="c-comp" spy={true} smooth={true} offset={0} duration={500}>
         <li className="co">
           <a id="contact" href="#!">
            Contact <i className="material-icons right grey-text">mail_outline</i>
            </a>
         </li>
         </Link>

         </div>
         <li>
            <div className="divider"></div>
         </li>
         <div className="social-icons">
           <a id="linkedin" className="waves-effect waves-light btn-floating social linkedin " href="https://www.linkedin.com/in/hermsrivas/"><i class="fa fa-linkedin"></i></a>&nbsp;
           <a id="github" className="waves-effect waves-light btn-floating social-icon github" href="https://github.com/speedy012"><i class="fa fa-github"></i></a>&nbsp;
           <a id="gmail" className="waves-effect waves-light btn-floating social-icon google" href="mailto:hermsrivas@gmail.com"><i class="fa fa-google"></i></a>
         </div>
       </ul>
       <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i>

       </a>
     </div>
   );
 }
}

export default Sidebar;

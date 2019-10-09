import React, { Component } from "react";
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
               <strong id="name" className="white-text name">Herman Rivas</strong>
             <a href="#email">
               <span id="title" className="grey-text email ">Software Engineer</span>
             </a>
             </div>
           </div>
           <div className="divider"></div>
         </li>
         <li className="intro">
           <a id="introduction" href="#!">
             Intro <i className="material-icons right grey-text">home</i>
           </a>
         </li>
         <li className="port">
           <a id="portfolio" href="#!">
            Portfolio <i className="material-icons right grey-text">apps</i>
            </a>
         </li>
         <li className="ab">
           <a id="about" href="#!">
            About Me <i className="material-icons right grey-text">account_box</i>
            </a>
         </li>
         <li className="co">
           <a id="contact" href="#!">
            Contact <i className="material-icons right grey-text ">mail_outline</i>
            </a>
         </li>
         <li>
            <div className="divider"></div>
         </li>
         <div className="social-icons">
           <a id="linkedin" className="waves-effect waves-light btn-floating social linkedin " href="https://www.linkedin.com/in/hermsrivas/"><i class="fa fa-linkedin"></i></a>&nbsp;
           <a id="github" className="waves-effect waves-light btn-floating social-icon github" href="https://github.com/speedy012"><i class="fa fa-github"></i></a>&nbsp;
           <a id="gmail" className="waves-effect waves-light btn-floating social-icon google" href="mailto:hermsrivas@gmail.com"><i class="fa fa-google"></i></a>
         </div>
       </ul>
       <a href="#!" data-target="slide-out" className="sidenav-trigger">

       </a>
     </div>
   );
 }
}

export default Sidebar;

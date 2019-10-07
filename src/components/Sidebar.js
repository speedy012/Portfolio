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
     <div>
       <ul
         ref={Sidenav => {
           this.Sidenav = Sidenav;
         }}
         id="slide-out"
         className="sidenav sidenav-fixed"
       >
         <li>
           <div className="user-view">
             <div className="background">
               <img className="profile-pic" src={require('../blue_background.jpg')} alt="profile-pic"/>
             </div>
             <div className="pics">
             <a href="#user">
               <img className="circle" src={require('../profile_pic.jpg')} alt="background-pic"/>
             </a>

               <strong className="white-text name">Herman Rivas</strong>

             <a href="#email">
               <span className="white-text email ">Software Engineer</span>
             </a>
             </div>
           </div>
         </li>
         <li>
           <a href="#!">
             Intro <i className="material-icons right">home</i>
           </a>
         </li>
         <li>
           <a href="#!">
            Portfolio <i className="material-icons right">apps</i>
            </a>
         </li>
         <li>
           <a href="#!">
            About Me <i className="material-icons right">account_box</i>
            </a>
         </li>
         <li>
           <a href="#!">
            Contact <i className="material-icons right ">mail_outline</i>
            </a>
         </li>
         <li>
           <div className="divider" />
         </li>
         <div className="social-icons">
           <a class="waves-effect waves-light btn-floating social linkedin" href="https://www.linkedin.com/in/hermsrivas/"><i class="fa fa-linkedin"></i></a>&nbsp;&nbsp;
           <a class="waves-effect waves-light btn-floating social-icon github" href="https://github.com/speedy012"><i class="fa fa-github"></i></a>&nbsp;
           <a class="waves-effect waves-light btn-floating social-icon google" href="mailto:hermsrivas@gmail.com"><i class="fa fa-google"></i></a>
         </div>
       </ul>
       <a href="#!" data-target="slide-out" className="sidenav-trigger">

       </a>
     </div>
   );
 }
}

export default Sidebar;

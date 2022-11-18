import { Component } from "react";
import PersonalInfo from "./personalinfo";
import Experience from "./experince";
import Contacts from "./contact";

class UserCV extends Component{
  render(){
    return(
      <>
      <PersonalInfo />
      <Experience />
      <Contacts />
      </>
    );
  }
}

export default UserCV;
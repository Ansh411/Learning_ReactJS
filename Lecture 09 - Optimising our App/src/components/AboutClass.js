import React from "react"
import UserClass from "./UserClass"


class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent constructor called");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount");
  }

  render() {

    console.log("Parent Render called");
    
      return (
    <div>
      <h1>About us</h1><br/>
      <h2>Hey ! This is an online food ordering App -- "BiteNow"</h2>
      <UserClass name = {"First"} location = {"Alwar"} />
    </div>
  )
  }

}


export default About;
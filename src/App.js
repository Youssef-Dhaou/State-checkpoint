import React,{Component} from "react";

import './App.css';
import Profile from "./Component/Profile/Profile";


class App extends Component {
  state = {
  Person:{ 
  fullName:"Youssef DHAOU",
  bio:"My name is Youssef, I'm 27 years old, form Tunsisia and I hope eventually to be full Stack web developer",
  imgSrc:"./picture.jpg",
  profession:"Embedded System Engineer",
},
show : false,
countApp: 0
}

componentDidMount() {
  setInterval(() => {
      this.setState({ countApp: this.state.countApp + 1 })
  }, 1000)
  
}



render(){
  return(
    <div className="App">
      <button className="btn" onClick ={()=> this.setState({show: !this.state.show})}>{this.state.show? "hide": "show"} </button>
      {this.state.show? <Profile state={this.state}/>: <h1> Please, show your profile </h1>}

      <h4 style={{ backgroundColor: "teal",fontSize: "20px",fontFamily: "cursive",color: "white"}}> countApp: {this.state.countApp}{" "} sec </h4>
    </div>

  )
}

}
export default App;

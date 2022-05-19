import React, {Component} from "react"
import './Profile.css'

class Profile extends Component {
    constructor() {
        super();
        this.state = {
        countProfile:0
        };
      }

componentDidMount(){
    setInterval(() => {
        this.setState({ countProfile: this.state.countProfile + 1 })
    }, 1000)
}


    render() { 
        return (
<div className="container">
  <div className="card__container">
    <div className="card">
      <div className="card__content">
        <h3 className="card__header">{this.props.state.Person.fullName}</h3>
        <p className="card__info">{this.props.state.Person.bio}</p>
        <h1 className="card__info" > {this.props.state.Person.profession} </h1>
        <img className="card__button" src={this.props.state.Person.imgSrc} alt="failed"/>
      </div>
      <div className="count">
  countProfile: {this.state.countProfile}{" "} 
                sec
                </div>

    </div>
  </div>
</div>



        );
    }
}
 
export default Profile;
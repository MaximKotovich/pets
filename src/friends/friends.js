import React, { Component } from "react";
import "./friends.css"

class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            dogImage: []
        }
    }

 componentDidMount(){
    fetch("https://dog.ceo/api/breeds/image/random/3")
    // fetch("https://thecocktaildb.com/api/json/v1/1/search.php?f=a")
     .then(res => res.json())
     .then((data) => {
         this.setState({dogImage: data.message})
     })
 }
    render() {
        const prevDog = this.state.dogImage.map((item, i) => {
         
            return(<div className="dogImage"><img  key={i}  src = {item}/></div>  )
        })
        return(
            <div className="bodyFriends">
                {prevDog}              
            </div>
        )
    }
}



export default Friends;
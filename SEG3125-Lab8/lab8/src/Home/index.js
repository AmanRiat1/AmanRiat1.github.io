import React, {Component} from 'react'
import "./index.css";

class Home extends Component{
    state ={
        content: ''
    }
    render(){
        return(
            <div>
                <p>Welcome to Spike's Computer Repair Shop</p>
            </div>
        )
    }
}

export default Home;
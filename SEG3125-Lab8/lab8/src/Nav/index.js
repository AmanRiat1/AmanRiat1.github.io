import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import "./index.css";

class NavBar extends Component{
    state ={
        content: ''
    }
    render(){
        return(
            <Nav fill variant="pills" defaultActiveKey="/home">
                <Nav fill className="sideNav flex-column border-right">
                    <Nav.Link eventKey="link-1" href="/home">
                        <div><i class="fab fa-500px" style={{fontSize:"36px"}}></i></div>  
                        Logo</Nav.Link>
                    <Nav.Link  eventKey="link-2" href="/services">
                        <div><i class="fa fa-wrench" style={{fontSize:"36px"}}></i></div>                    
                        Services
                    </Nav.Link>
                    <Nav.Link eventKey="link-3" href="/tutorial">
                        <div><i class="fas fa-chalkboard-teacher" style={{fontSize:"36px"}}></i></div>     
                        Tutorial</Nav.Link>
                    <Nav.Link eventKey="link-4" href="/apointment">
                        <div><i class="far fa-calendar-check" style={{fontSize:"36px"}}></i></div>     
                        Appointment</Nav.Link>
                    <Nav.Link eventKey="link-5" href="/about">
                        <div><i class="fas fa-info-circle" style={{fontSize:"36px"}}></i></div>  
                        About</Nav.Link>
                </Nav>
            </Nav>  
        )
    }
}

export default NavBar;
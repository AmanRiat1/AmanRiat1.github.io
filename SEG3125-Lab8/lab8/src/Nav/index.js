import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import "./index.css";

class NavBar extends Component{
    state ={
        content: ''
    }
    render(){
        return(
                <Nav className="border-right col-md-12 d-none d-md-block bg-white sidebar"
                defaultActiveKey="/home">
                    <div className="logo">
                        <Nav.Link className="tab"  href="/home" >
                            <div><i class="fab fa-500px" style={{fontSize:"36px"}}></i></div>  
                        </Nav.Link>
                    </div>

                    <div className="link">
                        <Nav.Link  className="tab" href="/services" >
                            <div><i class="fa fa-wrench" style={{fontSize:"36px"}}></i></div>                    
                            Services
                        </Nav.Link>

                    </div>
                    
                    <div className="link">
                        <Nav.Link className="tab" href="/tutorial">
                            <div><i class="fas fa-chalkboard-teacher" style={{fontSize:"36px"}}></i></div>     
                            Tutorial
                        </Nav.Link>
                    </div>
                    
                    <div className="link">
                        <Nav.Link className="tab" href="/appointment">
                            <div><i class="far fa-calendar-check" style={{fontSize:"36px"}}></i></div>     
                            Appointment
                        </Nav.Link>
                    </div>

                    <div className="link">
                        <Nav.Link className="tab" href="/about">
                            <div><i class="fas fa-info-circle" style={{fontSize:"36px"}}></i></div>  
                            About
                        </Nav.Link>

                    </div>

                </Nav>
        )
    }
}

export default NavBar;
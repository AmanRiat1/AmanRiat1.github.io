import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import "./index.css";
import Select from '@material-ui/core/Select';

const navText = {
    services: ["Services", "Servicios"],
    tutorial: ["Tutorial", "Tutorial"],
    appointment: ["Appointment", "Cita"],
    about: ["About", "Acerca de"]
}

class NavBar extends Component{
    handleChange = (e) =>{
        this.props.handleLanguageChange(e.target.value);
    }
    
    render(){
        const language = this.props.language === 'en' ? 0 : 1;

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
                            {navText.services[language]}
                        </Nav.Link>

                    </div>
                    
                    <div className="link">
                        <Nav.Link className="tab" href="/tutorial">
                            <div><i class="fas fa-chalkboard-teacher" style={{fontSize:"36px"}}></i></div>     
                            {navText.tutorial[language]}
                        </Nav.Link>
                    </div>
                    
                    <div className="link">
                        <Nav.Link className="tab" href="/appointment">
                            <div><i class="far fa-calendar-check" style={{fontSize:"36px"}}></i></div>     
                            {navText.appointment[language]}
                        </Nav.Link>
                    </div>

                    <div className="link">
                        <Nav.Link className="tab" href="/about">
                            <div><i class="fas fa-info-circle" style={{fontSize:"36px"}}></i></div>  
                            {navText.about[language]}
                        </Nav.Link>
                    </div>
                    <i class="fa fa-globe" 
                        aria-hidden="true" 
                        style={{paddingRight : "10px", paddingLeft : "5px"}}>

                    </i>
                    <Select
                        native
                          value={this.props.language}
                          onChange={this.handleChange}
                        >
                        <option aria-label="None" value="" />
                        <option value={"en"}>English</option>
                        <option value={"esp"}>Español</option>
                    </Select>
                </Nav>
        )
    }
}

export default NavBar;
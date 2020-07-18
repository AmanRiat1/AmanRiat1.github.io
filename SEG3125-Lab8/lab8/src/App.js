import React, {Component} from 'react'
import './App.css';
import NavBar from'./Nav/'
import Home from './Home/'
import Tutorial from './Tutorial/'
import Appointment from './Appointment'
import Services from './Services'
import ErrorPage from './ErrorPage'
import About from './About'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import {Col, Row, Container } from 'react-bootstrap'

const footerText = {
  location: ["Location: 90210 Spike Street", "Ubicación: 90210 Spike Street"],
  telephone: ["Telphone: 613-142-4324", "Teléfono: 613-142-4324."],
  text: ["Spike's Repair Shop", "Taller de reparaciones de Spike"],
}

class App extends Component{
  state ={
      language: 'en'
  }

  handleLanguageChange = (val) =>{
    this.setState({
        language: val
      });
  }

  render(){
    const language = this.state.language === 'en' ? 0 : 1;
    return (
      <BrowserRouter>
        <div className="App main-content">
          <Container fluid>
            <Row>
              <Col xs={1.5}>
                <NavBar
                  language = {this.state.language}
                  handleLanguageChange = {this.handleLanguageChange}
                />
              </Col>
              <Col xs={10}>
                <Switch>
                  <Route exact path='/' render={(props) => <Home {...props} language ={this.state.language}/>} />
                  <Route exact path='/home' render={(props) => <Home {...props} language ={this.state.language}/>} />
                  <Route exact path='/tutorial' render={(props) => <Tutorial {...props} language ={this.state.language}/>} />
                  <Route path='/appointment' render={(props) => <Appointment {...props} language ={this.state.language}/>}/>
                  <Route path='/services' render={(props) => <Services {...props} language ={this.state.language}/>} />
                  <Route path='/about' render={(props) => <About {...props} language ={this.state.language}/>} />
                  <Route path='/404' render={(props) => <ErrorPage {...props} language ={this.state.language}/>} />
                </Switch>
              </Col>
            </Row>
          </Container>        
          <footer className='footer mt-auto py-3 bg-dark text-white'>
            <div id="footer">
            <Container fluid>
              <Row>
                <Col xs={3}>
                  <div style={{textAlign:"left",paddingLeft :"20px"}}>
                    <p>{footerText.location[language]}</p>
                    <p>{footerText.telephone[language]}</p>
                  </div>
                </Col>
                <Col xs={8}>
                  <div style={{justifyContent:"center",display:"flex" , alignItems: "center"}}>
                    <p>{footerText.text[language]}</p>
                  </div>
                </Col>
              </Row>
            </Container>

            </div>
          </footer>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

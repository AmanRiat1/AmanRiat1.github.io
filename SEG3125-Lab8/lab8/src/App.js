import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <div className="App main-content">
        <Container fluid>
          <Row>
            <Col xs={1.5}>
              <NavBar></NavBar>
            </Col>
            <Col xs={10}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/tutorial' component={Tutorial} />
                <Route path='/appointment' component={Appointment} />
                <Route path='/services' component={Services} />
                <Route path='/about' component={About} />
                <Route path='/x' component = {ErrorPage} />
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
                  <p>Location: 90210 Spike Street</p>
                  <p>Telphone: 613-142-4324</p>
                </div>
              </Col>
              <Col xs={8}>
                <div style={{justifyContent:"center",display:"flex" , alignItems: "center"}}>
                  <p>Spike's Repair Shop</p>
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

export default App;

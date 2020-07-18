import React, {Component} from 'react'
import {ToggleButton,ButtonGroup, Button, Form, Col, Row, Card} from 'react-bootstrap/'
import "./index.css";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { getDay } from 'date-fns';

import mobo from './mobo.jpg';
import hdd from './hdd.jpg';
import buildpc from './buildpc.jpg';
import os from './os.jpg';


class Appointment extends Component{
    state ={
        repair: true,
        startDate: new Date(),
        serviceType: ''
    }

    isWeekday = date => {
      const day = getDay(date);
      return day !== 0 && day !== 6;
    };

    sendConfirmation = () =>{
      alert(`The service you have booked is ${this.state.serviceType
      } and the date is for ${this.state.startDate}`)
    }

    handleChange = date => {
      this.setState({
        startDate: date
      });
    };

    handleServiceType = e =>{
      let type = 'nothing';
      if (e.target.id === "formHorizontalRadios1"){
        type = this.state.repair ? "Motherboard Repair" : "Build a PC Tutorial"
      }else{
        type = this.state.repair ? "Harddrive Repair" : "Install an OS Tutorial"
      }
      this.setState({
        serviceType: type
      })
    }


    setChecked = (type) =>{
      console.log(type);
        let state;
        if (type==="repair"){
          this.setState({
                repair: true,
          });
        }else{
          this.setState({
                repair: false,  
          });
        }
        
      }

      text = (value) =>{
          let msg;
          if (value){
            msg =  <div className="row">
            <div className="col-sm-6" >
                <Card >
                  <Card.Img variant="top" className="photo" src={mobo} thumbnail  />
                  <Card.Body>
                    <Card.Title>Motherboard Repair</Card.Title>
                    <Card.Text>
                      Got a broken mobo preventing you from scrolling through Twitter all day?
                      We can fix that so you can tweet!
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-sm-6">
                <Card >
                  <Card.Img variant="top" className="photo" src={hdd} thumbnail />
                  <Card.Body>
                    <Card.Title>Harddrive Repair</Card.Title>
                    <Card.Text>
                      Busted your hard drive and need that precious data back? We can help you 
                      recover that lost data!
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
        </div>;
          }else{
            msg =  <div className="row">
            <div className="col-sm-6" >
                <Card >
                  <Card.Img variant="top" className="photo" src={buildpc} thumbnail  />
                  <Card.Body>
                    <Card.Title>Build a PC Tutorial</Card.Title>
                    <Card.Text>
                      Come in and get a class on how to build a PC. Bring your own parts in 
                      or practice with ours!
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-sm-6">
                <Card >
                  <Card.Img variant="top" className="photo" src={os} thumbnail />
                  <Card.Body>
                    <Card.Title>Install an OS Tutorial</Card.Title>
                    <Card.Text>
                      Built your PC but need to learn what to do after? We take you through 
                      the crucial steps after you build a pc.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
        </div>;
          }
          return (
            msg
          )
      }
    
    render(){
        return(
            <div>
            <div className="row">
                <div className="col-sm-6" >
                <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                        type="checkbox"
                        size="lg"
                        variant="secondary"
                        checked={this.state.checked}
                        value="repair"
                        onChange={(e) => this.setChecked(
                             e.currentTarget.value)}
                        block     
                        >
                        Repair
                    </ToggleButton>
                </ButtonGroup>
                </div>
                <div className="col-sm-6">
                <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                        type="checkbox"
                        size="lg"
                        variant="secondary"
                        checked={this.state.checked}
                        value="tutorial"
                        onChange={(e) => this.setChecked(
                            e.currentTarget.value)}
                        >
                        Tutorial
                    </ToggleButton>
                </ButtonGroup>
                </div>
                </div>
                <br></br>
                {this.text(this.state.repair) }
                <br></br>
                <br></br>
                <br></br>

                <Card >
                    <Card.Body> 
                    <Card.Title>Book an Appointment</Card.Title>
                    <Form onSubmit={this.sendConfirmation}>
                      <Form.Group as={Row} controlId="formName">
                        <Form.Label column sm={2}>
                          Name
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="name" placeholder="Name" />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formEmail">
                        <Form.Label column sm={2}>
                          Email
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="email" placeholder="Email" />
                        </Col>
                      </Form.Group>
                      
                      <fieldset>
                        <Form.Group as={Row}>
                          <Form.Label as="legend" column sm={2}>
                            {this.state.repair ? "Repair" : "Tutorial"}
                          </Form.Label>
                          <Col sm={3}>
                            <div class="radioAlignLeft">
                            <Form.Check
                              type="radio"
                              label= {this.state.repair ? "Motherboard Repair" : "Build a PC Tutorial"}
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                              onChange={this.handleServiceType}
                            />
                            <Form.Check
                              type="radio"
                              label={this.state.repair ? "Harddrive Repair" : "Install an OS Tutorial"}
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                              onChange={this.handleServiceType}
                            />
                             </div>
                          </Col>
                        </Form.Group>
                      </fieldset>

                      <Form.Group as={Row} controlId="formPhone">
                        <Form.Label column sm={2}>
                          Phone
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="phone" placeholder="Phone" />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formDate">
                        <Form.Label column sm={2}>
                          Date
                        </Form.Label>
                        <Col sm={10}>
                        <div className="date">  
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          minDate={new Date()}
                          filterDate={this.isWeekday}
                          className="form-control"
                        />
                           
                           </div>
                          {/* <Form.Control type="date" placeholder="Date" /> */}
                        </Col>
                      </Form.Group>
  

                      <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Button type="submit">Submit</Button>
                        </Col>
                      </Form.Group>
                    </Form>
                    </Card.Body>
                </Card>
            <br></br>              
            </div>
        )
    }
}

export default Appointment;
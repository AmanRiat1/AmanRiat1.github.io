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

const appointmentText = {
  repair: ["Repair", "Reparar"],
  tutorial: ["Tutorial", "Tutorial"],
  
  moboRepair: ["Motherboard Repair", "Reparación de la placa base"],
  moboRepairText: ["Got a broken mobo preventing you from scrolling through Twitter all day? We can fix that so you can tweet!",
                    "¿Tienes un mobo roto que te impide desplazarte por Twitter todo el día? ¡Podemos arreglar eso para que puedas tuitear!"],
  
  hddRepair: ["Harddrive Repair", "Reparación de disco duro"],
  hddRepairText : ["Busted your hard drive and need that precious data back? We can help you recover that lost data!", 
                    "¿Rompió su disco duro y necesita recuperar esos preciosos datos? ¡Podemos ayudarlo a recuperar esos datos perdidos!"],

  pcTut : ["Build a PC Tutorial", "Crear un tutorial de PC"],
  pcTutText : ["Come in and get a class on how to build a PC. Bring your own parts in or practice with ours!",
                "Entra y obtén una clase sobre cómo construir una PC. ¡Trae tus propias partes o practica con las nuestras!"],
 
  osTut : ["Install an OS Tutorial", "Instalar un tutorial del sistema operativo"],
  osTutText : [" Built your PC but need to learn what to do after? We take you through the crucial steps after you build a pc.",
                "¿Construye tu PC pero necesitas aprender qué hacer después? Te guiamos a través de los pasos cruciales después de construir una PC."],
  
  alertOne : ["The service you have booked is ","El servicio que ha reservado es"],
  alertTwo : ["and the date is for", "y la fecha es para"],
  formTitle : ["Book an Appointment", "Reservar una cita"],
  formName : ["Name", "Nombre"],
  formPhone : ["Phone", "Teléfono"],
  formDate : ["Date", "Fecha"],
  submit : ["Submit", "Enviar"]

}


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

      selectedLanguage = () =>{
       if (this.props.language === 'en') 
        return 0;
       else {
        return 1;
       }
        
      }

      text = (value) =>{
          let msg;
          let language = this.props.language === 'en' ? 0 : 1;
          if (value){
            msg =  <div className="row">
            <div className="col-sm-6" >
                <Card >
                  <Card.Img variant="top" className="photo" src={mobo} thumbnail  />
                  <Card.Body>
                    <Card.Title>{appointmentText.moboRepair[language]}</Card.Title>
                    <Card.Text>
                      {appointmentText.moboRepairText[language]}
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-sm-6">
                <Card >
                  <Card.Img variant="top" className="photo" src={hdd} thumbnail />
                  <Card.Body>
                    <Card.Title>{appointmentText.hddRepair[language]}</Card.Title>
                    <Card.Text>
                      {appointmentText.hddRepairText[language]}
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
                    <Card.Title>{appointmentText.pcTut[language]}</Card.Title>
                    <Card.Text>
                    {appointmentText.pcTutText[language]}
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-sm-6">
                <Card >
                  <Card.Img variant="top" className="photo" src={os} thumbnail />
                  <Card.Body>
                    <Card.Title>{appointmentText.osTut[language]}</Card.Title>
                    <Card.Text>
                    {appointmentText.osTutText[language]}
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
      const language = this.props.language === 'en' ? 0 : 1;
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
                        {appointmentText.repair[language]}
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
                        {appointmentText.tutorial[language]}
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
                    <Card.Title>{appointmentText.formTitle[language]}</Card.Title>
                    <Form onSubmit={this.sendConfirmation}>
                      <Form.Group as={Row} controlId="formName">
                        <Form.Label column sm={2}>
                        {appointmentText.formName[language]}
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="name" placeholder={appointmentText.formName[language]} />
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
                              label= {this.state.repair ? appointmentText.moboRepair[language]: appointmentText.pcTut[language]}
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                              onChange={this.handleServiceType}
                            />
                            <Form.Check
                              type="radio"
                              label={this.state.repair ? appointmentText.hddRepair[language]: appointmentText.osTut[language]}
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
                        {appointmentText.formPhone[language]}
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="phone" placeholder={appointmentText.formPhone[language]}/>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formDate">
                        <Form.Label column sm={2}>
                        {appointmentText.formDate[language]}
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
                          <Button type="submit">{appointmentText.submit[language]}</Button>
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
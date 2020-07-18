import React, {Component} from 'react'
import Media from 'react-bootstrap/Media'
import {Col, Row} from 'react-bootstrap/'

const serviceText = {
    mobo: ["Motherboard Repair", "Reparación de la placa base"],
    hdd: ["Harddrive Repair", "Reparación de disco duro"],
}

function Services(props) {

        const language = props.language === 'en' ? 0 : 1;

        return(
            <Row>
                <Col xs={3}>
                </Col>
                <Col xs={6}>
                    <ul className="list-unstyled">
                        <Media as="li">
                        <div><i class="	fas fa-tools" style={{fontSize:"64px"}}></i></div> 
                            <Media.Body className="text">
                            <h5>{serviceText.mobo[language]}</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            </Media.Body>
                        </Media>
                        <br></br>
                        <Media as="li">
                            <div><i class="	fas fa-tools" style={{fontSize:"64px"}}></i></div> 
                            <Media.Body className="text">
                            <h5>{serviceText.hdd[language]}</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            </Media.Body>
                        </Media>
                    </ul>
                </Col>
            </Row>
           
        )
    }


export default Services;
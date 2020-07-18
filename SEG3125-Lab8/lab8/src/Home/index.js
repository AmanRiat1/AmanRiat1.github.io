import React, {Component} from 'react'
import "./index.css";
import {Card, CardColumns} from 'react-bootstrap/'
import mobo from './mobo.jpg';
import hdd from './hdd.jpg';
import os from './os.jpg';

const homeText = {
    title: ["Spike's Computer Repair Shop","Taller de reparación de computadoras de Spike" ],
    genericCard: ["We Repair!", "Nosotros reparamos"],
    secondCard: ["We Teach!", "Nosotros enseñamos"],
}


function Home(props){
        const language = props.language === 'en' ? 0 : 1;
        return(
            <div>
                <h1 class="display-4">{homeText.title[language]}</h1>
                <br></br>
                <br></br>
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src={mobo}/>
                        <Card.Body>
                        <Card.Title>{homeText.genericCard[language]}</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Img variant="top"  src={hdd} />
                        <Card.Body>
                        <Card.Title>{homeText.genericCard[language]}</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="primary" text="white" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                        <Card.Title>{homeText.secondCard[language]}</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src={os} />
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
        )
    }

export default Home;
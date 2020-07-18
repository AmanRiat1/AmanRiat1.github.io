import React, {Component} from 'react'
import Media from 'react-bootstrap/Media'
import orange from './orange.jpg'

const tutorialText = {
    title: ["Step", "Paso"],
}

function Tutorial(props){
        const language = props.language === 'en' ? 0 : 1;
        return(
            <ul className="list-unstyled">
            <Media as="li">
                <img
                width={64}
                height={64}
                className="mr-3"
                 src={orange}
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5>{tutorialText.title[language]}</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
            </Media>

            <Media as="li">
                <img
                width={64}
                height={64}
                className="mr-3"
                 src={orange}
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5>{tutorialText.title[language]}</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
            </Media>

            <Media as="li">
                <img
                width={64}
                height={64}
                className="mr-3"
                 src={orange}
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5>{tutorialText.title[language]}</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
            </Media>
            <Media as="li">
                <img
                width={64}
                height={64}
                className="mr-3"
                 src={orange}
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5>{tutorialText.title[language]}</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
            </Media>

            </ul>
        )
    }

export default Tutorial;
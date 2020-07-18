import React  from 'react'
import { Card} from 'react-bootstrap/'

const errorText = {
    text: ["This page doesn't exist!", "¡Esta página no existe!"],
}

function ErrorPage(props){
    const language = props.language === 'en' ? 0 : 1;
        return(
            <Card body >{errorText.text[language]}</Card>
        );
}

export default ErrorPage;
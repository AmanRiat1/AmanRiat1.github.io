import React, {Component} from 'react'

const aboutText = {
    text: ["A simple page detailing what the company is about", "Una página simple que detalla de qué se trata la compañía"],
}

function About(props){
        const language = props.language === 'en' ? 0 : 1;
        return(
            <div>
                <p>{aboutText.text[language]}</p>
            </div>
        )
    }


export default About;
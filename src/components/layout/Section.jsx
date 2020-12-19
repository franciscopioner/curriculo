import './Section.css'
import React from 'react'

const Section = (props) =>{
    if(props.className === "Intro"){
        return <div className="Section">
                    {props.children}
                </div>
    }else{
        return <div className="Section">
                    <h2>{props.title}</h2>
                    <p className="Sub"><strong>{props.subtitle}</strong></p>
                    {props.children}
                </div>
    }
}

export default Section
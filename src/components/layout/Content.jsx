import './Content.css'
import React from 'react'

const Section = (props) =>{

    const sectionStyle = {
        backgroundColor: props.bgcolor || '#fff',
    }

    if(props.className === "Intro"){
        return (
            <div style={sectionStyle}>
                <div className="Content">
                    {props.children}
                </div>
            </div>
        )
                
    }else{
        return (
            <div style={sectionStyle}>
                <div className="Content">
                    <h2>{props.title}</h2>
                    <p className="Sub"><strong>{props.subtitle}</strong></p>
                    {props.children}
                </div>
            </div>
        )      
    }
}

export default Section
import React from 'react'
import designSkills from '../../../data/designSkills'
import developerSkills from '../../../data/developerSkills'
import softSkills from '../../../data/softSkills'
import IcoDesign from '../../../assets/icodesign.png'
import IcoDev from '../../../assets/icodev.png'
import IcoSoft from '../../../assets/icosoft.png'

const skillsList = (props) => {

    const design = designSkills.map((designSkill) => {
        return (
            <li key={designSkill.id}>
                {designSkill.name}
            </li>
        );
    });

    const developer = developerSkills.map((developerSkill) => {
        return (
            <li key={developerSkill.id}>
                {developerSkill.name}
            </li>
        );
    });

    const soft = softSkills.map((softSkill) => {
        return (
            <li key={softSkill.id}>
                {softSkill.name}
            </li>
        );
    });

    if (props.name === "Design Skills") {
        return (
            <div>
                <img src={IcoDesign} alt={props.name} />
                <p>{props.name}</p>
                <ul style={{ listStyle: 'none' }}>
                    {design}
                </ul>
            </div>
        )
    } else if (props.name === "Developer Skills") {
        return (
            <div>
                <img src={IcoDev} alt={props.name} />
                <p>{props.name}</p>
                <ul style={{ listStyle: 'none' }}>
                    {developer}
                </ul>
            </div>
        )
    }
    else if (props.name === "Soft Skills") {
        return (
            <div>
                <img src={IcoSoft} alt={props.name} />
                <p>{props.name}</p>
                <ul style={{ listStyle: 'none' }}>    
                    {soft}
                </ul>
            </div>
        )
    }
}

export default skillsList;
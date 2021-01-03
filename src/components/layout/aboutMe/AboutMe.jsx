import React from 'react'
import './AboutMe.css'
import Column from '../Column'
import Content from '../Content'
import Img02 from '../../../assets/image02.jpg'


const AboutMe = (props) => (
    <section id="AboutMe">
        <Content title="About me" subtitle="A little about myself">
            <Column>
                <p>As I said before, I have been a front-end since I was born. I had always been very creative, curious, patient and determined, even before I could understand what it meant.
    When I was 11 years old, I got my first computer and I immediately realized what I would like to do for the rest of my life.
    I have taken courses in IT, computer graphics, web design, and never stopped studying.
    Today I am very proud to say that I am a front-end developer.</p>
            </Column>
            <Column>
                <img className={props.className} src={Img02} alt="About me" />
            </Column>
        </Content>
    </section>
)

export default AboutMe;
import React from 'react'
import './Intro.css'
import Column from '../Column'
import Content from '../Content'
import ImgIntro from '../../../assets/intro.jpg'

const Intro = (props) => (
    <header id="Intro">
        <Content className="Intro" bgcolor="aquamarine">
            <Column>
                <h1>Francisco Pioner</h1>
                <p>Hello. My name is Francisco Pioner. I was born a front-end developer. I love what I do because I do what I love.</p>
            </Column>
            <Column>
                <img className="ImgIntro" src={ImgIntro} alt="Imagem Intro" />
            </Column>
        </Content>
    </header>
)

export default Intro;
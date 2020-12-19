import React from 'react'
import Column from './Column'
import Section from './Section'
import './Portfolio.css'
import './Zoom.css'
import InnerImageZoom from 'react-inner-image-zoom';

import ImgPort01 from '../../assets/portfoilio01.jpg'
import ImgPort02 from '../../assets/portfoilio02.jpg'
import ImgPort03 from '../../assets/portfoilio03.jpg'
import ImgPort04 from '../../assets/portfoilio04.jpg'
import ImgPort05 from '../../assets/portfoilio05.jpg'
import ImgPort06 from '../../assets/portfoilio06.jpg'


const Portfolio = (props) => (
    <section id="Portfolio">
        <Section title="Portfolio" subtitle="A summary of what I can do">
            <Column>
                <InnerImageZoom src={ImgPort01} zoomSrc={ImgPort01} zoomScale="1.2" />
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort02} zoomSrc={ImgPort02} zoomScale="1.2" />
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort03} zoomSrc={ImgPort03} zoomScale="1.2" />
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort04} zoomSrc={ImgPort04} zoomScale="1.2" />
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort05} zoomSrc={ImgPort05} zoomScale="1.2" />
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort06} zoomSrc={ImgPort06} zoomScale="1.2" />
            </Column>
        </Section>
    </section>
)

export default Portfolio;
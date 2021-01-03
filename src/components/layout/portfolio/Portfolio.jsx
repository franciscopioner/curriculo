import React from 'react'
import Column from '../Column'
import Content from '../Content'
import './Portfolio.css'
import '../Zoom.css'
import InnerImageZoom from 'react-inner-image-zoom';

import ImgPort01 from '../../../assets/portfoilio01.jpg'
import ImgPort02 from '../../../assets/portfoilio02.jpg'
import ImgPort03 from '../../../assets/portfoilio03.jpg'
import ImgPort04 from '../../../assets/portfoilio04.jpg'
import ImgPort05 from '../../../assets/portfoilio05.jpg'
import ImgPort06 from '../../../assets/portfoilio06.jpg'


const Portfolio = (props) => (
    <section id="Portfolio">
        <Content  title="Portfolio" subtitle="A summary of what I can do">
            <Column>
                <InnerImageZoom src={ImgPort01} zoomSrc={ImgPort01} alt="Senac"/>
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort02} zoomSrc={ImgPort02} alt="StTrois"/>
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort03} zoomSrc={ImgPort03} alt="Konig Telecom" />
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort04} zoomSrc={ImgPort04} alt="Zaffari" />
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort05} zoomSrc={ImgPort05} alt="WestSide" />
            </Column>
            <Column>
                <InnerImageZoom src={ImgPort06} zoomSrc={ImgPort06} alt="Zaffari" />
            </Column>
        </Content>
    </section>
)

export default Portfolio;
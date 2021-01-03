import React from 'react'
import './Testimonial.css'
import Column from '../Column'
import Content from '../Content'
import Ajala from '../../../assets/ajala.png'

const Testimonial = (props) => (
    <section id="Testimonial">
        <Content title="Testimonial" subtitle="Friends’ testimonial">
            <Column>
                <img src={Ajala} alt="Ajala img" />
                <p className="Testimonial">I have worked with Francisco on two complex projects and in both cases, the work was done on time, on budget, and with a high degree of professionalism.</p>            
            </Column>
        </Content>
    </section>
)

export default Testimonial;
import React from 'react'
import './Testimonial.css'
import Column from './Column'
import Section from './Section'
import Ajala from '../../assets/ajala.png'

const Testimonial = (props) => (
    <section id="Testimonial">
        <Section title="Testimonial" subtitle="Friends’ testimonial">
            <Column>
                <img src={Ajala} alt="Ajala img" />
                <p className="Testimonial">I have worked with Francisco on two complex projects and in both cases, the work was done on time, on budget, and with a high degree of professionalism.</p>            
            </Column>
        </Section>
    </section>
)

export default Testimonial;
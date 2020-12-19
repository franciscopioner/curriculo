import React from 'react'
import Column from './Column'
import Section from './Section'
import './Skills.css'
import IcoDesign from '../../assets/icodesign.png'
import IcoDev from '../../assets/icodev.png'
import IcoSoft from '../../assets/icosoft.png'


const Skills = (props) => (
    <section id="Skills">
        <Section title="Skills" subtitle="My study results">
            <Column>
                <div className="Card">
                    <ul>
                        <li><img src={IcoDesign} alt="Design skills icon" /></li>
                        <li><strong>Design skills</strong></li>
                        <li>UX/UI design</li>
                        <li>Information architecture</li>
                        <li>Responsive design</li>
                        <li>Common design patterns</li>
                        <li>Graphic design basics</li>
                        <li>Typography</li>
                        <li>Color theory</li>
                        <li>Composition</li>
                        <li>Design software</li>
                        <li>Communication</li>
                        <li>User modeling</li>
                        <li>User testing</li>
                        <li>Limitations</li>
                        <li>Design briefs</li>
                    </ul>
                </div>
            </Column>
            <Column>
                <div className="Card">
                    <ul>
                        <li><img src={IcoDev} alt="Developer skills icon" /></li>
                        <li><strong>Developer skills</strong></li>
                        <li>HTML/CSS</li>
                        <li>Javascript/Jquery</li>
                        <li>CSS frameworks</li>
                        <li>Javascript frameworks</li>
                        <li>CSS preprocessing</li>
                        <li>Version control/Git</li>
                        <li>Responsive design</li>
                        <li>Testing/debugging</li>
                        <li>Browser developer tools</li>
                        <li>Building tools/web performance</li>
                        <li>Automation</li>
                        <li>Command line</li>
                    </ul>
                </div>
            </Column>
            <Column>
                <div className="Card">
                    <ul>
                        <li><img src={IcoSoft} alt="Soft skills icon" /></li>
                        <li><strong>Soft skills</strong></li>
                        <li>Good communication</li>
                        <li>Teamwork</li>
                        <li>Creativity and willingness to learn</li>
                        <li>Problem-solving</li>
                    </ul>
                </div>
            </Column>
        </Section>
    </section>
)

export default Skills;
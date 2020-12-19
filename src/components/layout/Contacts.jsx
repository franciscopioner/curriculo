import React from 'react'
import './Contacts.css'
import Column from './Column'
import Section from './Section'
import Ico01 from '../../assets/icogithub.png'
import Ico02 from '../../assets/icoemail.png'
import Ico03 from '../../assets/icolinkedin.png'


const Contacts = (props) => (
    <footer id="Contacts">
        <Section title="Contacts" subtitle="How to find me">
            <Column>
                <address>
                    <ul>
                        <li>
                            <a href="https://github.com/franciscopioner" target="blank"><img src={Ico01} alt="GitHub" /></a>
                        </li>
                        <li>
                        <a href="mailto:francisco.pioner@gmail.com" target="blank"><img src={Ico02} alt="Email" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/francisco-pioner-8395a7200/" target="blank"><img src={Ico03} alt="Linkedin" /></a>
                        </li>
                    </ul>
                </address>
            </Column>
        </Section>
    </footer>
)

export default Contacts;
import React from 'react'
import Column from '../Column'
import Content from '../Content'
import Ico01 from '../../../assets/icogithub.png'
import Ico02 from '../../../assets/icoemail.png'
import Ico03 from '../../../assets/icolinkedin.png'
import './Contacts.css'


const Contacts = (props) => (
    <footer id="Contacts">
        <Content title="Contacts" subtitle="How to find me">
            <Column>
                <address>
                    <ul>
                        <li>
                            <a href="https://github.com/franciscopioner" target="blank">
                                <img src={Ico01} alt="GitHub" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:francisco.pioner@gmail.com" target="blank">
                                <img src={Ico02} alt="Email" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/francisco-pioner-8395a7200/" target="blank">
                                <img src={Ico03} alt="Linkedin" />
                            </a>
                        </li>
                    </ul>
                </address>
            </Column>
        </Content>
    </footer>
)

export default Contacts;
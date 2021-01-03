import React, { Component } from 'react';

import Bar from './components/layout/Bar'
import Intro from './components/layout/intro/Intro'
import AboutMe from './components/layout/aboutMe/AboutMe'
import Skills from './components/layout/skills/Skills'
import Portfolio from './components/layout/portfolio/Portfolio'
import WhereHaveIBeen from './components/layout/whereIHaveBeen/WhereHaveIBeen'
import Testimonials from './components/layout/testmonial/Testimonial'
import Contacts from './components/layout/contacts/Contacts'


class App extends Component {
    constructor() {
      super();
      this.state = {
         className: 'hidden'
      }
    }
    handleScroll() {
     if (document.documentElement.scrollTop >= 300) {
        this.setState({
          className: 'show'
        })
      } 
    }
    componentDidMount() {
      window.onscroll = () => this.handleScroll()
    }
    render() {
      document.title = 'Francisco Pioner'
      return(
        <div className="App">
            <Bar />
            <Intro />
            <AboutMe className={this.state.className} />
            <Skills />
            <Portfolio />
            <WhereHaveIBeen />
            <Testimonials />
            <Contacts />
            <Bar />
        </div>
      )
    }
 }
 export default App;
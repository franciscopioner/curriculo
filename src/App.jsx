import './App.css'
import React, { Component } from 'react';

import Bar from './components/layout/Bar'
import Intro from './components/layout/Intro'
import AboutMe from './components/layout/AboutMe'
import Skills from './components/layout/Skills'
import Portfolio from './components/layout/Portfolio'
import WhereHaveIBeen from './components/layout/WhereHaveIBeen'
import Testimonials from './components/layout/Testimonial'
import Contacts from './components/layout/Contacts'


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
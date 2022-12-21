import React from 'react';
import PeopleTabs from './Components/PeopleTabs.js';
import './App.css';
import getData from './util/getData.js';
import Minors from './Components/Minors.js';
import DegreesUndergraduate from './Components/DegreesUndergraduate.js';
import DegreesGraduate from './Components/DegreesGraduate.js';
import Employment from './Components/Employment.js';
import Employers from './Components/Employers.js';
import Careers from './Components/Careers.js';
import Hero from './assets/images/computerscreenwithdrink.jpg';

export default class App extends React.Component {
  constructor(props) {
    //below line creates access to what I normally assume is this
    super(props);
    //any data that can or will change (so we get another render!)
    this.state = {
      about: {},
      loaded: false
    }
  }

  render() {
    //bring in state...
    const { about, loaded } = this.state;

    if (!loaded) return (<div><h1>Loading... My project is currently consuming data hosted on a private API that is linked to my school's private server and not open to the public for security reasons. I will happily show you everything in functioning format during an interview or with any possible follow-up questions.</h1></div>);

    return (
      <div className="App">
        <div id="top" class="navMenu">
          <h1>Welcome to the iSchool Website!</h1>
          <div class="ui inverted stackable tabular menu">
            <a href="#top" class="active link item">About</a>
            <a href="#degreesUndergraduate" class="link item">Degrees</a>
            <a href="#minors" class="link item">Minors</a>
            <a href="#employment" class="link item">Employment</a>
            <a href="#people" class="link item">People</a>
          </div>
        </div>

        <div class="heroImage">
          <h1>Information Sciences and Technologies @ RIT</h1>
        </div>

        <div id="about" class="About">
          <h1>Information Sciences and Technologies @ RIT</h1>
          <h2>{about.title}</h2>
          <h4>{about.description}</h4>
          <h3>{about.quote}</h3>
          <h3>--{about.quoteAuthor}</h3>
        </div>

        {/* now we can start loading our Components! */}
        <hr id="degreesUndergraduate"/>
        <DegreesUndergraduate></DegreesUndergraduate>
        
        <hr id="degreesGraduate"/>
        <DegreesGraduate></DegreesGraduate>
        
        <hr id="minors"/>
        <Minors></Minors>
        
        <hr id="employment"/>
        <Employment></Employment>
        
        <hr id="employers"/>
        <Employers></Employers>
        
        <hr id="careers"/>
        <Careers></Careers>

        <hr id="people"/>
        <PeopleTabs />

        <hr id="footer"/>
        {/* footer goes here */}
      </div>
    );
  }

  componentDidMount() {
    //go get the data!
    getData('about/')
      .then((json) => {
        console.log(json);
        this.setState({
          about: json,
          loaded: true
        })
      });
  }
  // on mounting - 1) constructor, 2)getDerivedStateFromProps ,3)render, 4)componentDidMount
}
// commented out code export default App;
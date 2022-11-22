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
import EmploymentCompleteTable from './Components/EmploymentCompleteTable.js';

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

    if (!loaded) return (<div><h1>Loading...</h1></div>);

    return (
      <div className="App">
        <h1>Information Sciences and Technologies @ RIT</h1>
        <h2>{about.title}</h2>
        <h4>{about.description}</h4>
        <h3>{about.quote}</h3>
        <h3>--{about.quoteAuthor}</h3>
        {/* now we can start loading our Components! */}
        <hr/>
        <DegreesUndergraduate></DegreesUndergraduate>
        <hr/>

        <DegreesGraduate></DegreesGraduate>
        <hr/>

        <Minors></Minors>
        <hr/>

        <Employment></Employment>
        <hr/>

        <Employers></Employers>
        <hr/>

        <Careers></Careers>
        <hr/>

        {/* I can write a comment! */}
        <PeopleTabs />
        <hr/>
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
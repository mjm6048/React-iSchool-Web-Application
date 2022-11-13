import React from 'react';
import People from './Components/People.js';
import PeopleTabs from './Components/PeopleTabs.js';
import './App.css';
import getData from './util/getData.js';
import Degrees from './Components/Degrees.js';
import DegreesTabs from './Components/DegreesTabs.js';
import MinorsCards from './Components/MinorsCards.js';

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
        <h1>Welcome to the iSchool website....!</h1>
        <h2>{about.title}</h2>
        <h4>{about.description}</h4>
        <h3>{about.quote}</h3>
        <h3>--{about.quoteAuthor}</h3>
        {/* now we can start loading our Components! */}
        <hr />
        <DegreesTabs></DegreesTabs>
        <hr />

        <MinorsCards></MinorsCards>
        <hr/>
        
        {/* I can write a comment! */}
        <PeopleTabs />
        <hr />
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

  //on mounting - 1) constructor, 2)getDerivedStateFromProps ,3)render, 4)componentDidMount

}

//export default App;
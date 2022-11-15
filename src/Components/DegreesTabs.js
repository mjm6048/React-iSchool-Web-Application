import React from 'react'
import { Tab } from 'semantic-ui-react'
import getData from '../util/getData';
import Degrees from './DegreesUndergraduate';

/*
const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic
*/

export default class DegreesTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            degrees: {},
            loaded: false
        }
    }
    render() {
        const { degrees, loaded } = this.state;
        const panes = [
            {
                menuItem: 'WMC', render: () =>
                    <Tab.Pane>
                        <Degrees key="1" title="WMC" />
                    </Tab.Pane>
            },

        ]

        if (!loaded) return (<div><h1>Our Degrees is Loading...</h1></div>);

        return (
            <div>
                <h1>{degrees.title}</h1>
                <h3>{degrees.description}</h3>
                <p>{degrees.concentrations}</p>
                <Tab panes={panes} />
            </div>
        );
    }
    componentDidMount() {
        getData('degrees/')
            .then((json) => {
                this.setState({
                    degrees: json,
                    loaded: true
                })
            })
    }
}
import React from 'react'
import { Tab } from 'semantic-ui-react'
import AllPeople from './AllPeople.js';
import getData from '../util/getData';

export default class PeopleTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: {},
            loaded: false
        }
    }
    render() {
        const { people, loaded } = this.state;
        const panes = [
            {
                menuItem: 'Faculty', render: () =>
                    <Tab.Pane>
                        <AllPeople key="1" title="Faculty" pepGroup={people.faculty} />
                    </Tab.Pane>
            },
            {
                menuItem: 'Staff', render: () =>
                    <Tab.Pane>
                        <AllPeople key="2" title="Staff" pepGroup={people.staff} />
                    </Tab.Pane>
            }
        ]

        if (!loaded) return (<div><h1>Our People is Loading...</h1></div>);

        return (
            <div>
                <h1>{people.title}</h1>
                <h3>{people.subTitle}</h3>
                <Tab panes={panes} />
            </div>
        );
    }
    componentDidMount() {
        getData('people/')
            .then((json) => {
                this.setState({
                    people: json,
                    loaded: true
                })
            })
    }
}
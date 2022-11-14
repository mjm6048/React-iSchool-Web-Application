import React from 'react';
import getData from '../util/getData.js';

export default class Careers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            careers: {},
            loaded: false
        }
    }

    render() {
        const { careers, loaded } = this.state;

        //initial state
        if (!loaded) return (<div>Careers Loading...</div>);

        return (
            <div>
                <h1>Careers</h1>
                {/* Put out ALL of the Employer Names... */}
                <div className='peopleList'>
                    {
                        careers.careerNames.map((p) =>
                            <div className='peopleListItem'>
                                <div>{p}</div>
                            </div>
                        )
                    }
                </div>
                <p>*Employers/Careers are randomly pulled from our recent graduates</p>
            </div>
        )
    }

    componentDidMount() {
        getData('employment/careers/careerNames/')
            .then((json) => {
                this.setState({
                    careers: json,
                    loaded: true,
                });
            });
    }
}
import React from 'react';
import getData from '../util/getData.js';

export default class Employers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employers: {},
            loaded: false
        }
    }

    render() {
        const { employers, loaded } = this.state;

        //initial state
        if (!loaded) return (<div>Employers Loading...</div>);

        return (
            <div>
                <h1>Employers</h1>
                {/* Put out ALL of the Employer Names... */}
                <div className='peopleList'>
                    {
                        employers.employerNames.map((p) =>
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
        getData('employment/employers/employerNames/')
            .then((json) => {
                this.setState({
                    employers: json,
                    loaded: true,
                });
            });
    }
}
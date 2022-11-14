import React from 'react';
import getData from '../util/getData.js';
import BasicCard from './EmploymentCard.js';

export default class Employment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employment: {},
            loaded: false
        }
    }

    render() {
        const { employment, loaded } = this.state;

        //initial state
        if (!loaded) return (<div>Employment Loading...</div>);

        return (
            <div>
                {/* All of employment introduction */}
                <h1>{employment.introduction.title}</h1>
                <h2>{employment.introduction.content[0].title}</h2>
                <h2>{employment.introduction.content[0].description}</h2>

                {/* All of statistics */}
                <BasicCard>
                    title={employment.degreeStatistics.title}
                </BasicCard>
                {/* <BasicCard({employment.degreeStatistics.title}, {employment.degreeStatistics.statistics[0].value}, {employment.degreeStatistics.statistics[0].description})> */}
                <h2>{employment.degreeStatistics.title}</h2>
                <h2>{employment.degreeStatistics.statistics[0].value}</h2>
                <h2>{employment.degreeStatistics.statistics[0].description}</h2>

                <h2>{employment.degreeStatistics.statistics[1].value}</h2>
                <h2>{employment.degreeStatistics.statistics[1].description}</h2>

                <h2>{employment.degreeStatistics.statistics[2].value}</h2>
                <h2>{employment.degreeStatistics.statistics[2].description}</h2>

                <h2>{employment.degreeStatistics.statistics[3].value}</h2>
                <h2>{employment.degreeStatistics.statistics[3].description}</h2>

                {/* All of cooperative education introduction */}
                <h2>{employment.introduction.content[1].title}</h2>
                <h2>{employment.introduction.content[1].description}</h2>

                {/* All of employing company names */}

                {/* All of careers/jobs */}

            </div>
        )
    }

    componentDidMount() {
        getData('employment/')
            .then((json) => {
                this.setState({
                    employment: json,
                    loaded: true,
                });
            });
    }
}
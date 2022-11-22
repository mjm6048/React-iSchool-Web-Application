import React from 'react';
import getData from '../util/getData.js';
import CooperativeEducationCompleteTable from './CooperativeEducationCompleteTable.js';
import EmploymentCompleteTable from './EmploymentCompleteTable.js';
import EmploymentStatisticCard from './EmploymentStatisticCard.js';

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
                <h1>{employment.introduction.content[0].title}</h1>
                <h2>{employment.introduction.title}</h2>
                <h3>{employment.introduction.content[0].description}</h3>

                {/* All of statistics */}
                <div className='employmentCardsList'>
                    <div className='employmentCardsItem'>
                    {EmploymentStatisticCard(employment.degreeStatistics.statistics[0].value, employment.degreeStatistics.statistics[0].description, "#d64541", "white")}
                    </div>

                    <div className='employmentCardsItem'>
                    {EmploymentStatisticCard(employment.degreeStatistics.statistics[1].value, employment.degreeStatistics.statistics[1].description, "#2c3e50", "white")}
                    </div>

                    <div className='employmentCardsItem'>
                    {EmploymentStatisticCard(employment.degreeStatistics.statistics[2].value, employment.degreeStatistics.statistics[2].description, "#68c3a3", "white")}
                    </div>

                    <div className='employmentCardsItem'>
                    {EmploymentStatisticCard(employment.degreeStatistics.statistics[3].value, employment.degreeStatistics.statistics[3].description, "#f4b350", "white")}
                    </div>
                </div>

                {/* All of former students becoming employees*/}
                {EmploymentCompleteTable(employment.employmentTable)}

                {/* All of cooperative education introduction */}
                <h2>{employment.introduction.content[1].title}</h2>
                <h2>{employment.introduction.content[1].description}</h2>

                {/* All of employed students on co-op. Cooperative Education*/}
                {CooperativeEducationCompleteTable(employment.coopTable)}
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
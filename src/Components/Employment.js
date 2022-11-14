import React from 'react';
import getData from '../util/getData.js';
import EmploymentModal from './EmploymentModal.js';

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
                <h1>Employment</h1>
                {/* All of introduction */}
                <h2>{employment.introduction.title}</h2>
                <h2>{employment.introduction.content[0].title}</h2>
                <h2>{employment.introduction.content[0].description}</h2>
                <h2>{employment.introduction.content[1].title}</h2>
                <h2>{employment.introduction.content[1].description}</h2>

                {/* All of statistics */}
                <h2>{employment.degreeStatistics.title}</h2>
                <h2>{employment.degreeStatistics.statistics[0].value}</h2>
                <h2>{employment.degreeStatistics.statistics[0].description}</h2>

                <h2>{employment.degreeStatistics.statistics[1].value}</h2>
                <h2>{employment.degreeStatistics.statistics[1].description}</h2>

                <h2>{employment.degreeStatistics.statistics[2].value}</h2>
                <h2>{employment.degreeStatistics.statistics[2].description}</h2>

                <h2>{employment.degreeStatistics.statistics[3].value}</h2>
                <h2>{employment.degreeStatistics.statistics[3].description}</h2>

                {/* <h2>{employment.</h2> */}

                {/* Put out ALL of the employment... */}
                <div className='peopleList'>
                    {
                        // employment.map((p) =>
                        // <div className='peopleListItem'>
                        //         {/* replace the below with a cute little icon for reach minor */}
                        //         <img src={p.imagePath} style={{ maxWidth: "150px" }} alt="Cute Little Icon" />
                        //         <EmploymentModal {...p}> </EmploymentModal>
                        //     </div>
                        // )
                        // EmploymentModal(employment.introduction.title)
                    }
                </div>
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
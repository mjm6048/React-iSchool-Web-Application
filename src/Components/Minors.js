import React from 'react';
import getData from '../util/getData.js';
import MinorsModal from './MinorsModal.js';

export default class Minors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minors: {},
            loaded: false
        }
    }

    render() {
        const { minors, loaded } = this.state;

        //initial state
        if (!loaded) return (<div>Minors Loading...</div>);

        return (
            <div>
                <h2>Our Undergraduate Minors</h2>
                <h3>Expand your field of study</h3>
                {/* Put out ALL of the minors... */}
                <div className='peopleList'>
                    {
                        minors.UgMinors.map((p) =>
                            <div className='peopleListItem'>
                                {/* replace the below with a cute little icon for reach minor */}
                                <img src={p.imagePath} style={{ maxWidth: "150px" }} alt="Cute Little Icon" />
                                <MinorsModal {...p}> </MinorsModal>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        getData('minors/')
            .then((json) => {
                this.setState({
                    minors: json,
                    loaded: true,
                });
            });
    }
}
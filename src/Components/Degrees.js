import React from 'react';
import DegreesModal from './DegreesModal.js';
import getData from '../util/getData.js';

export default class Degrees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            degrees: {},
            loaded: false
        }
    }

    render() {
        const { degrees, loaded } = this.state;

        //initial state
        if (!loaded) return (<div>Degrees Loading...</div>);

        return (
            <div>
                {/* Need to edit 23 and 24 */}
                <h1>{degrees.title}</h1>
                <h3>{degrees.degreeName}</h3>
                <h2>Our Undergraduate Degrees</h2>
                {/* Put out ALL of the degrees... */}
                <div className='peopleList'>
                    {
                        degrees.undergraduate.map((p) =>
                            <div className='peopleListItem'>
                                {/* replace the below with a cute little icon for reach major */}
                                <img src={p.imagePath} style={{ maxWidth: "150px" }} alt="Cute Little Icon" />
                                <DegreesModal {...p}> </DegreesModal>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        getData('degrees/')
            .then((json) => {
                this.setState({
                    degrees: json,
                    loaded: true,
                });
            });
    }
}
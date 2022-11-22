import React from 'react';
import DegreesUndergraduateModal from './DegreesUndergraduateModal.js';
import getData from '../util/getData.js';

export default class DegreesUndergraduate extends React.Component {
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
        if (!loaded) return (<div>Undergraduate Degrees Loading...</div>);

        return (
            <div>
                <h2>Our Undergraduate Degrees</h2>
                {/* Put out ALL of the degrees... */}
                <div className='degreesList'>
                    {
                        degrees.undergraduate.map((p) =>
                            <div className='degreesListItem'>
                                <DegreesUndergraduateModal {...p}> </DegreesUndergraduateModal>
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
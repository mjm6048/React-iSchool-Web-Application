import React from 'react';
import DegreesGraduateModal from './DegreesGraduateModal.js';
import getData from '../util/getData.js';

export default class DegreesGraduate extends React.Component {
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
        if (!loaded) return (<div>Graduate Degrees Loading...</div>);

        return (
            <div>
                <h2>Our Graduate Degrees</h2>
                {/* Put out ALL of the degrees... */}
                <div className='peopleList'>
                    {
                        degrees.graduate.map((p) =>
                            <div className='peopleListItem'>
                                <DegreesGraduateModal {...p}> </DegreesGraduateModal>
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
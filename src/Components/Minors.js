import React from 'react';
import getData from '../util/getData.js';
import MinorsCards from './MinorsCards';

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
                <h1>{minors.title}</h1>
                <h2>Minors</h2>
                {/* Put out ALL of the minors... */}
                <div className='minorsList'>
                    {
                        minors.minors.map((p) =>
                            <div className='minorItem'>
                                {/* replace the below with a cute little icon for reach minor */}
                                <img src={p.imagePath} style={{ maxWidth: "150px" }} alt="Cute Little Icon" />
                                <MinorsCards {...p}> </MinorsCards>
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
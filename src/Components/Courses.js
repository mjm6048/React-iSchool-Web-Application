import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import getData from '../util/getData.js';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: {},
            loaded: false
        }
    }

    render() {
        const { courses, loaded } = this.state;

        //initial state
        if (!loaded) return (<div>Courses Loading...</div>);

        return (
            <div>
                <h1>Courses</h1>
                {/* Put out ALL of the Employer Names... */}
                <div className='peopleList'>
                    {
                        courses.careerNames.map((p) =>
                            <div className='peopleListItem'>
                                <div>{p}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        getData('employment/careers/careerNames/')
        // getData('course/courseID=' + {courses.courseID} + '/')
            .then((json) => {
                this.setState({
                    courses: json,
                    loaded: true,
                });
            });
    }
}
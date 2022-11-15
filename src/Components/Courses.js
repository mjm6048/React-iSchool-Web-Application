import * as React from 'react';
import getData from '../util/getData.js';
import CoursesModal from './CoursesModal.js';

export default class Courses extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            courses: {},
            loaded: false,
        }
    }

    render() {
        const { courses, loaded } = this.state;

        //initial state
        if (!loaded) return (<div>Courses Loading...</div>);

        return (
            <div>
                {/* <h1>Courses</h1> */}
                {/* Put out the course name... */}
                <div className='peopleList'>
                    {
                        <CoursesModal {...courses}></CoursesModal>
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        getData('course/courseID=' + this.props.children + '/')
            .then((json) => {
                this.setState({
                    courses: json,
                    loaded: true,
                });
            });
    }
}
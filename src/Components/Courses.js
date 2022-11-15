import * as React from 'react';
import getData from '../util/getData.js';
import CoursesModal from './CoursesModal.js';

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

        // getData('employment/careers/careerNames/')
        // // getData('course/courseID=' + {courses.courseID} + '/')
        //     .then((json) => {
        //         this.setState({
        //             courses: json,
        //             loaded: true,
        //         });
        //     });

        return (
            
            <div>
                <h1>Courses</h1>
                {/* Put out the course name... */}
                <div className='peopleList'>
                    {
                        // courses.courseID.map((p) =>
                        //     <div className='peopleListItem'>
                        //         <CoursesModal {...p}> </CoursesModal>
                        //     </div>
                        // )
                        <CoursesModal></CoursesModal>
                        // {courses.courseID}, {courses.title}, {courses.description}
                    }
                    {/* <h2>{courses.courseID}</h2>
                    <h2>{courses.title}</h2>
                    <h2>{courses.description}</h2> */}
                    
                </div>
            </div>
        )
    }

    componentDidMount() {
        getData('course/courseID=ISTE-340')
        // getData('course/courseID=' + {courses.courseID} + '/')
            .then((json) => {
                this.setState({
                    courses: json,
                    loaded: true,
                });
            });
    }
}
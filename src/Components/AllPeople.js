import React from 'react';
import BasicModal from './PeopleModal.js';

export default class People extends React.Component{
    constructor(props){
        super(props);
        this.state={
            thisGroup : props.pepGroup,
            title : props.title
        }
    } 
    
    render(){
        const { title, thisGroup } = this.state;
        return (
            <div>
                <h2>{title}</h2>
                {/* Put out ALL of the people... */}
                <div className='peopleList'> 
                {
                    thisGroup.map((p) => 
                        <div className='peopleListItem'> 
                            <img src={p.imagePath} style={{maxWidth:"150px"}} alt="Faculty Person"/>
                            
                            <BasicModal {...p} />
                        </div>
                    )
                }
                </div>
            </div>
        )
        
    }
}
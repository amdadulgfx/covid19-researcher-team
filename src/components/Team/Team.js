import './Team.css'
import React from 'react';

const Team = (props) => {
    const totalAddResearcherReducer = (previous, current) => previous + current;
    const total = props.salaryTotal.reduce(totalAddResearcherReducer, 0);
    return (
        <div className='team'>
            <h2>Researchers Added: {props.addResearcher.length}</h2>
            <h2>Total Cost: ${total}</h2>
            <h2>Researchers Name: </h2>
            {
                props.addResearcher.map(researcher => <h2
                    key={researcher.name}
                    className='name-researcher'>{researcher.name}</h2>)
            }
        </div>
    );
};

export default Team;
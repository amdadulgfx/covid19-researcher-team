import './Team.css'
import React from 'react';

const Team = (props) => {
    const unique = [...new Set(props.addResearcher)];
    const salary = unique.map(pd => pd.salary);
    const totalAddResearcherReducer = (previous, current) => previous + current;
    const total = salary.reduce(totalAddResearcherReducer, 0);
    // console.log(salary);
    // props.addResearcher.length
    return (
        <div className='team'>
            <h2>Researchers Added: {unique.length}</h2>
            <h2>Total Cost: ${total}</h2>
            <h2>Researchers Name: </h2>
            {
                unique.map(researcher => <h2
                    key={researcher.name}
                    className='name-researcher'>{researcher.name}</h2>)
            }
        </div>
    );
};

export default Team;
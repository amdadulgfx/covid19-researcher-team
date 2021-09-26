import './Board.css'
import React, { useEffect, useState } from 'react';
import Researcher from '../Researcher/Researcher';
import Team from '../Team/Team';

const Board = () => {
    const [researchers, setResearchers] = useState([]);
    const [addResearcher, setAddResearcher] = useState([]);
    const [salaryTotal, setSalaryTotal] = useState([]);
    // fetching fake data 
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setResearchers(data))
    }, [])

    //handle added researcher button
    const handleAddedResearcher = researcher => {
        researcher.isAdded = true;
        const newAddResearcher = [...addResearcher, researcher];
        setAddResearcher(newAddResearcher);
        //salary for total
        const newAddedSalary = [...salaryTotal, researcher.salary];
        setSalaryTotal(newAddedSalary);
    }

    return (
        <div className='board-container'>
            <div className="researchers-container">
                {
                    researchers.map(researcher => <Researcher
                        key={researcher.id}
                        researcher={researcher}
                        addResearcher={addResearcher}
                        handleAddedResearcher={handleAddedResearcher}
                    ></Researcher>)
                }
            </div>
            <div className="total-container">
                <Team addResearcher={addResearcher} salaryTotal={salaryTotal}></Team>
            </div>
        </div>
    );
};

export default Board;
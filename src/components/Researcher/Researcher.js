import './Researcher.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Researcher = (props) => {
    const { name, image, age, salary, profession, country } = props.researcher;
    // console.log(props.addResearcher[0].isAdded);

    return (
        <div className='researcher-details'>
            <div className='researcher-img'>
                <img src={image} alt="" />
            </div>
            <p><b>Name:</b> {name}</p>
            <p><b>Profession:</b> {profession}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Country</b> {country}</p>
            <p><b>Salary</b> ${salary}</p>

            <button className='btn-add' onClick={() => { props.handleAddedResearcher(props.researcher) }}><FontAwesomeIcon icon={faUserPlus} /> Add to the Team</button>
        </div>
    );
};

export default Researcher;
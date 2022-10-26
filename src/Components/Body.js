import React from 'react';
import './Body.css';
import FirstOffer from './FirstOffer';
import SecondOffer from './SecondOffer';

function Body () {
    return (
            <div className='body_border'>
                <FirstOffer />
                <SecondOffer />
            </div>
    )
};

export default Body;
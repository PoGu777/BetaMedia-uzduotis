import React from 'react';
import './Body.css';
import FirstOffer from './FirstOffer';
import Search from './Search';
import SecondOffer from './SecondOffer';

function Body () {
    return (
            <div className='body_border'>
                <Search />
                <FirstOffer />
                <SecondOffer />
            </div>
    )
};

export default Body;
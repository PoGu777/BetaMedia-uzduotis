import React from 'react';
import './Search.css';
import { ReactComponent as RoadLogo } from '../assets/road.svg';
import { ReactComponent as TimeLogo } from '../assets/time.svg';
import { ReactComponent as PersonLogo } from '../assets/red-person.svg';
import { ReactComponent as PricetagLogo } from '../assets/pricetag.svg';

function Search () {
    return(
        <div className='search_border'>
            <div className='town_border'>
                <RoadLogo className="logo"/>
                <h4 className='miestas'>Miestas</h4>
            </div>
            <div className='stay_time_border'>
                <TimeLogo className="logo"/>
                <h4 className='miestas'>Nakvynės trukmė</h4>
            </div>
            <div className='people_amount_border'>
                <PersonLogo className="logo" />
                <h4 className='miestas'>Asmenų skaičius</h4>
            </div>
            <div className='search_price_border'>
                <PricetagLogo className="logo" />
                <h4 className='miestas'>Kaina</h4>
            </div>
        </div>
    )
};

export default Search;
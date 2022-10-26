import React from 'react';
import './FirstOffer.css';
import { ReactComponent as LocationLogo } from '../assets/location.svg';
import { ReactComponent as PersonLogo } from '../assets/red-person.svg';
import { ReactComponent as TimeLogo } from '../assets/time.svg';
import { ReactComponent as DateLogo } from '../assets/date.svg';

function SecondOffer () {
    return (
        <div className='container'>
            <div className='container_header'>

            </div>
            <div className='container_body'>
                <div className='offer_heading'>
                    <div className='offer_tags'>
                        <p className='naujiena'>Naujiena</p><p className='top_pasiulymas'>TOP pasiūlymas</p>
                    </div>
                    <div className='heading_text'>
                        <h3>Nakvynė Vilnius Grand Resort su visomis lauko pramogomis</h3>
                    </div>
                </div>
                <div className='offer_location'>
                    <p>VILNIUS GRAND RESORT</p>
                    <LocationLogo className="location_logo" /> <p className='location'>Vilnius</p>
                </div>
                <div className='offer_details'>
                    <div className='price_border'>
                        <h4 className='nuo'>Nuo</h4>
                        <h2 className='price'>69 €</h2>
                    </div>
                    <div className='details_border'>
                        <div className='person_border'>
                            <PersonLogo className="person_logo"/>
                            <p className='person_amount'>2 asmenys</p>
                        </div>
                        <div className='nights_border'>
                            <TimeLogo  className="time_logo"/>
                            <p className='time'>1 - 2 nakvynės</p>
                        </div>
                        <div className='date_border'>
                            <DateLogo  className="date_logo"/>
                            <p className='date'>Iki 2022.11.25</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SecondOffer;
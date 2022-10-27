import React from 'react';
import './FirstOffer.css';
import './SecondOffer.css';
import { ReactComponent as LocationLogo } from '../assets/location.svg';
import { ReactComponent as PersonLogo } from '../assets/red-person.svg';
import { ReactComponent as TimeLogo } from '../assets/time.svg';
import { ReactComponent as DateLogo } from '../assets/date.svg';
import { ReactComponent as DiscountLogo } from '../assets/discount.svg';

function SecondOffer () {
    return (
        <div className='container_second'>
            <div className='container_header_second'>
                <DiscountLogo className="discount_logo"/>
            </div>
            <div className='container_body'>
                <div className='offer_heading'>
                    <div className='offer_tags'>
                        <p className='tik_pas_mus'>Tik pas mus</p>
                    </div>
                    <div className='heading_text'>
                        <h3>Prabangus 5* poilsis palangoje modernaus dizaino viešbutyje</h3>
                    </div>
                </div>
                <div className='offer_location'>
                    <p>PALANGA HOTEL</p>
                    <LocationLogo className="location_logo" /> <p className='location'>Palanga</p>
                </div>
                <div className='offer_details'>
                    <div className='price_border'>
                        <h4 className='nuo'>Nuo</h4>
                        <h2 className='price'>109 €</h2>
                        <p className='crossed'>159 €</p>
                    </div>
                    <div className='details_border'>
                        <div className='person_border'>
                            <PersonLogo className="person_logo"/>
                            <p className='person_amount'>2 asmenys</p>
                        </div>
                        <div className='nights_border'>
                            <TimeLogo  className="time_logo"/>
                            <p className='time'>1 nakvynė</p>
                        </div>
                        <div className='date_border'>
                            <DateLogo  className="date_logo"/>
                            <p className='date'>12 mėn.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SecondOffer;
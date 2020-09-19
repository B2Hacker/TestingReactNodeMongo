import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check this out!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="Images\508938.png" text="Another random text without purpose" label="Cute" path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

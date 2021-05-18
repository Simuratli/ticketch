import React from 'react'
import './TicketCardHeading.css'
import Badge from '../Badge/Badge'
import MovieImage from '../../assets/images/img2.png'

function TicketCardHeading() {
    return (
        <div className='ticket-card-heading'>
            <div className='ticket-card-heading-image'>
                <img src={MovieImage} alt='movie' />
            </div>
            <div className='ticket-card-heading-content'>
                <h1>Hero</h1>
                <p>To be hero and save the world</p>
                <Badge text="Act" />
                <Badge text="Love" />
                <Badge text="Come" />
                <p>2019-10-01 Coming <span>222 min</span></p>
            </div>
        </div>
    )
}

export default TicketCardHeading

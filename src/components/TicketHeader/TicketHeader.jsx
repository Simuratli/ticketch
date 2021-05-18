import React from 'react'
import './TicketHeader.css'
import BackButton from '../../assets/images/icons/back.png'

function TicketHeader() {
    return (
        <div className='ticket-header'>
            <button className='ticket-header-button'>
                <img alt="Back button" src={BackButton} />
            </button>
            <h4 className='ticket-header-text'>Chose Ticket Type</h4>
        </div>
    )
}

export default TicketHeader

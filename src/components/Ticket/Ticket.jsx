import React,{useState} from 'react'
import TicketBackground from '../../assets/images/ticket.png'
import './Ticket.css'

function Ticket() {

    const [number, setNumber] = useState(1)

    function add(e) { 
        if(e==="+"){
            setNumber(number+1)
        }else if(e==='-'){
            setNumber(number-1)
        }
    }

    return (
        <div style={{backgroundImage:`url(${TicketBackground})`}} className='ticket'>
            <h2>Common <span className='red'>NT260</span></h2>
            <div className='ticket-buttons'>
                <button onClick={()=>add("-")} disabled={number <= 1}>-</button>
                <p>{number}</p>
                <button onClick={()=>{add('+')}}>+</button>
            </div>

            <p className='ticket-description'>Ticket description words.Ticket description words.Ticket description words.</p>
        </div>
    )
}

export default Ticket

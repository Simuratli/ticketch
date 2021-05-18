import React from 'react'
import './Badge.css'
function Badge(props) {
    return (
        <span className='badge'>
            {props.text}
        </span>
    )
}

export default Badge

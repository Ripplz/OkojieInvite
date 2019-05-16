import React from 'react';

const Guest = props => {
    return (
        <div className="guest"><div className="dot" />
            <span>{props.guest.guest}</span>
            {props.guest.additionalGuests&&<span> coming with {props.guest.additionalGuests}</span>}
        </div>
    )
}

export default Guest;
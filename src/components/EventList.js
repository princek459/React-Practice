import React from 'react'


export default function EventList( {handleClick, events}) {
    return (
        <div>
            {events.map((event, index) => (
                <React.Fragment key={event.id}>
                    <h2>{index} - {event.title}</h2>
                    {/* Deleting an event from the list by updating its state */}
                    <button onClick={() => handleClick(event.id)}>Delete Event</button>
                </React.Fragment>
            ))}
        </div>
    )
}

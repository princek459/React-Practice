import React from 'react'
import styles from './EventList.module.css'


export default function EventList( {handleClick, events}) {

    return (
        <div>
            {events.map((event) => (
                <div className={styles.card} key={event.id}>
                    <h2>Title: {event.title}</h2>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                    {/* Deleting an event from the list by updating its state */}
                    <button onClick={() => handleClick(event.id)}>Delete Event</button>
                </div>
            ))}
        </div>
    )
}

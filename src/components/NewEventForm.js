import './NewEventForm.css'
import { useState } from 'react'

export default function NewEventForm({ addEvent }) {

    // Setting the initial state of the title to be an empty string
    const [title, setTitle] = useState('')
    // Setting the initial state for the date
    const [date, setDate] = useState('')
    // Setting the initial state for the location
    const [location, setLocation] = useState('liverpool');

    // Resetting the states
    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('liverpool')
    }

    // Handling submitting the form
    const handleSubmit = (e) => {
        e.preventDefault()

        // object to represent the event
        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        // Firing the addEvent function with the new event
        addEvent(event)
        // reseting the form
        resetForm()
    }

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input 
                    type='text' 
                    // Aanonymous function inside the event handler that will set the title
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input 
                    type='date' 
                    // Aanonymous function inside the event handler that will set the title
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <label>
                <span>Event Location:</span>
                <select onChange={(e) => {
                    setLocation(e.target.value)
                }}>
                    <option value="liverpool">Liverpool</option>
                    <option value="london">London</option>
                    <option value="cardiff">Cardiff</option>
                </select>
            </label>
            <button>Submit</button>
            {/* <p>Title: {title} <br /> Date: {date}</p>
            <p onClick={resetForm} style={{cursor: 'pointer'}}>Reset the form</p> */}
        </form>
    )
}

import './App.css'
import { useState } from 'react'

function App() {
  // Boolean state initilization
  const [showEvents, setShowEvents] = useState(true)

  // Declaring state for events
  const [events, setEvents] = useState([
    {title: "Princes lists of things", id: 1},
    {title: "Another list item lol", id: 2},
    {title: "Really imaginative arent i", id: 3}
  ])

  console.log(showEvents)

  const handleClick = (id) => {
    // Updating the state of the event by using .filter()
    // .filter() returns a new array and keeps old array unchanged
    // Using callback function to access the previous state 
    // and base any state update on the previous state
    setEvents((prev) => {
      return prev.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }


  return (
    <div className="App">

      {showEvents && (
        <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div>
      )}

      {!showEvents && (
        <div>
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      </div>
      )}

      {/* Conditional && template for displaying the events when 
          the button is clicked */}
      {/* Mapping through each item in the events arra
          and displaying it in a JSX template. 
          Mapping through always needs a key value for the 
          child element*/}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          {/* Deleting an event from the list by updating its state */}
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}

export default App;

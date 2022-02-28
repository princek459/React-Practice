import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  // Modal state 
  const [showModal, setShowModal] = useState(false);

  // Boolean state initilization
  const [showEvents, setShowEvents] = useState(false)

  // Declaring state for events
  const [events, setEvents] = useState([])


  // Function to add a new event to the empty array of events
  const addEvent  =(event) => {
    setEvents((prevEvents) => {
      // Using the prev state as an argument and sreading the new 
      // event in that array
      return [...prevEvents, event]
    })
    // Hiding the modal after a new event gets added.
    setShowModal(false)
  }

  // Function to handle the click on the delete button
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


  const subtitle = "All of Prince's events here!"

  
  return (
    <div className="App">
      {/* Passing prop into component */}
      <Title
        title="Listed Events"
        subtitle={subtitle}
      />

      {showEvents && (
        <>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </>
      )}

      {!showEvents && (
        <>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </>
      )}

      {/* Conditional && template for displaying the events when 
          the button is clicked */}
      {/* Mapping through each item in the events arra
          and displaying it in a JSX template. 
          Mapping through always needs a key value for the 
          child element*/}
      {showEvents && <EventList
        handleClick={handleClick}
        events={events}

      />}
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
        )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>

    </div>
  );
}

export default App;

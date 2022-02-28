import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';

function App() {
  // Modal state 
  const [showModal, setShowModal] = useState(false);

  // Boolean state initilization
  const [showEvents, setShowEvents] = useState(false)

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

  const handleClose = () => {
    setShowModal(false)
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

      {/* <Modal>
        <h2>Download CV</h2>
        <p>Get a copy of my CV here!</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
        <p>Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum 
        has been the industry's standard dummy text ever 
        since the 1500s, when an unknown </p>
      </Modal>
      }
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </div>
  );
}

export default App;

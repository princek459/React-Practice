import './App.css'
import { useState } from 'react'

function App() {

  // Use state to declare the initial state for name
  const [name, setName] = useState('Mario')
  // Declaring state for lists 
  const [events, setEvents] = useState([
    {title: "Princes lists of things", id: 1},
    {title: "Another list item lol", id: 2},
    {title: "Really imaginative arent i", id: 3}
  ])

  const handleClick = () => {
    // Changing the state value for name
    setName('Prince')
    console.log(name)
  }


  return (
    <div className="App">
      <h1>My name is {name}</h1>
      
      <button onClick={handleClick}>Change Name</button>
      {/* Mapping through each item in the events arra
          and displaying it in a JSX template. 
          Mapping through always needs a key value for the 
          child element*/}
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;

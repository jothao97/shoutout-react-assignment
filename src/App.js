import './App.css';
import React, {useState} from 'react';
import ReactDatePicker from 'react-datepicker';


function App() {

  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [date, setDate] = useState(new Date());
  const [shoutouts, setShoutouts] = useState([])

const handleSubmit = (e) => {
  e.preventDefault();

  const newShoutout = {
    message: message,
    name: username,
    date: date
  };

  // Update shoutouts state with new shoutout
    setShoutouts([...shoutouts, newShoutout]);

    // Reset form fields
    setMessage('');
    setUsername('');
    setDate(new Date());
  };

  return (
    <div className='app'>
      <h1>Shout out!</h1>

      {/* Display shoutouts */}
      {shoutouts.map((shoutout, index) => (
        <div key={index}>
          <p>Message: {shoutout.message}</p>
          <p>Name: {shoutout.name}</p>
          <p>Date: {shoutout.date.toString()}</p>
        </div>
      ))}

      {/* Form */}
      <form onSubmit={handleSubmit}>

        <div className='input-group'>
          <input name='message' type='text' onChange={(e) => setMessage} value={message} placeholder='message input'/>
        </div>

        <div className='input-group'>
          <input name='username' type='text' onChange={(e) => setUsername} value={username} placeholder='name input'/>
        </div>

        <div className='input-group'>
          <input name='datepicker'>
            <ReactDatePicker selected={date} onChange={(date) => setDate(date)} value={date}/>
          </input>

        </div>

        <div>
          <button type='submit'>Send Shoutout</button>
        </div>

      </form>
    </div>
  );
}


export default App;


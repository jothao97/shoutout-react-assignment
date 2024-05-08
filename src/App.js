import './App.css';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';

function App() {

const [date, setDate] = useState(new Date());

const [announcementMessage, setAnnouncementMessage] = useState('Welcome');

  return (
    <div className='app'>
      <form>
        <div className='input-group'>
          <input name='announcement-msg'>{announcementMessage}</input>
        </div>
        <div className='input-group'>
          <input name='username' type='text'>username</input>
        </div>
        <div className='input-group'>
          <input name='datepicker'>
            <ReactDatePicker selected={date} onChange={(date) => setDate(date)}></ReactDatePicker>
          </input>
        </div>
      </form>
    </div>
  );
}

export default App;

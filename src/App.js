import React, { Component } from 'react';
import './App.css';

import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts</h1>

          <Contact nameavatar='https://randomuser.me/api/portraits/women/67.jpg' 
            name="Ann Byrne" status="online"/>

          <Contact nameavatar='https://randomuser.me/api/portraits/men/67.jpg' 
          name= "Paul Smith" status="offline"/>

          <Contact nameavatar='https://randomuser.me/api/portraits/men/11.jpg'
           name= "Tom Brown" status="online"/>
        </header>
      </div>
    );
  }
}

export default App;

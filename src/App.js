import React, { Component } from 'react';
import './App.css';
import Contactlist from './components/contactlist';

import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts</h1>

          <Contactlist />
        </header>
      </div>
    );
  }
}

export default App;

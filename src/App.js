import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/*Component*/}
        <Header />
        <section>
          {/*Component*/}
          <Navigation />
          <h2>User Form</h2>
          {/*Component*/}
          <RegisterForm />
        </section>
      </div>
    );
  }
}

export default App;

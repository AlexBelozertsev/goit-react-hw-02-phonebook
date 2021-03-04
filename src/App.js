import React, { Component } from 'react';
import Layout from './components/Layout';
import Form from './components/Form';
import Contacts from './components/Contacts';

// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Layout>
        <Form />
        <Contacts />
      </Layout>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Layout from './components/Layout';
import Title from './components/Title';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const checkDublicat = this.state.contacts.filter(
      contact => contact.name === data.name,
    );
    if (checkDublicat.length) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  filterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter),
    );
  };

  DeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContact = this.getFilteredContact();

    return (
      <Layout>
        <Title text={'Phonebook'} />
        <Form onSubmit={this.formSubmitHandler} />
        <Title text={'Contacts'} />
        <Filter value={filter} onChange={this.filterChange} />
        <Contacts list={filteredContact} onDeliteContact={this.DeleteContact} />
      </Layout>
    );
  }
}

export default App;

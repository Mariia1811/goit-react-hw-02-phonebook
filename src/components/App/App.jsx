import { Component } from 'react';
import FormElem from 'components/FormElem';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import {Wrapper, MainTitle, Title} from './App.styled'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`)
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onFilterInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    return [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  deleteContact = e => {
    const removeEL = e.currentTarget.parentNode.id;
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== removeEL),
    });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Wrapper>
        <MainTitle>Phonebook</MainTitle>
        <FormElem addContact={this.addContact} contacts={contacts} />

        <Title>Contacts</Title>
        <Filter value={filter} onInput={this.onFilterInput} />
        <Contacts
          contacts={contacts}
          filter={filter}
          filteredContacts={this.filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
export default App;
